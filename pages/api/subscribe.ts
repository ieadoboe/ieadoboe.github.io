import { NextApiRequest, NextApiResponse } from "next";

const BREVO_API_KEY = process.env.BREVO_API_KEY; 
const BREVO_LIST_ID = process.env.BREVO_LIST_ID;

const BREVO_API_URL = "https://api.brevo.com/v3/contacts/";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "POST") {
    try {
      const { email } = req.body;

      if (!BREVO_API_KEY || !BREVO_LIST_ID) {
        console.error("API key or List ID not defined.");
        return res.status(500).json({ message: "Server misconfiguration. Missing API key or List ID." });
      }

      if (!email || !/\S+@\S+\.\S+/.test(email)) {
        return res.status(400).json({ message: "Invalid email format" });
      }

      // Convert the list ID to a number if it's not already
      const listId = Number(BREVO_LIST_ID);
      if (isNaN(listId)) {
        return res.status(500).json({ message: "Invalid list ID format" });
      }

      // Send POST request to Brevo API to add the email to the list
      const response = await fetch(BREVO_API_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "api-key": BREVO_API_KEY!,
        },
        body: JSON.stringify({
          email,
          listIds: [listId], // Pass the list ID as a number
        }),
      });

      // Check for non-OK responses from Brevo
      if (!response.ok) {
        const responseData = await response.json();
        console.error("Brevo API response error:", responseData);
        throw new Error(`Error adding subscriber: ${responseData.message || response.statusText}`);
      }

      const data = await response.json();
      console.log("Subscriber added:", data);

      return res.status(200).json({ message: "Subscription successful" });
    } catch (error) {
      console.error("Error processing subscription:", error);
      return res.status(500).json({ message: "Server error. Please try again." });
    }
  } else {
    return res.status(405).json({ message: "Method Not Allowed" });
  }
}