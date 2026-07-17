# CV

Single source of truth for my resume, built with [RenderCV](https://rendercv.com) (v2.8+) and the **engineeringresumes** theme.

- **`Isaac_Edem_Adoboe_CV.yaml`**: the master CV. Every achievement lives here. Alternate bullet versions (worded for different role types) are kept as YAML comments next to the entry they belong to, so nothing is ever lost.
- **`resumes/`**: tailored, per-application resumes (gitignored; this repo is public, job applications stay private).
- **`rendercv_output/`**: rendered PDF/PNG/Markdown (gitignored).

## Setup

```bash
uv tool install "rendercv[full]"
```

## Workflow

### 1. Track achievements (ongoing)

Whenever something noteworthy happens (a project ships, a paper is published, a promotion, a new skill), add it to the master YAML right away. If an existing bullet has a better wording for a specific audience, keep both: the active one uncommented, the alternates as `#` comments beside it.

Render the master to check how it looks:

```bash
cd cv
rendercv render Isaac_Edem_Adoboe_CV.yaml
```

Add `--watch` for live preview while editing.

The website's "Download Resume" button serves `public/resume.pdf`. After rendering an updated master, refresh it with:

```bash
cp rendercv_output/Isaac_Edem_Adoboe_CV.pdf ../public/resume.pdf
```

### 2. Tailor a resume for a role (as needed)

```bash
cd cv
mkdir -p resumes/<company-or-role>
cp Isaac_Edem_Adoboe_CV.yaml resumes/<company-or-role>/Isaac_Edem_Adoboe_CV.yaml
cd resumes/<company-or-role>
# trim entries, reorder sections, swap in the commented alternates that fit the role
rendercv render Isaac_Edem_Adoboe_CV.yaml
```

The rendered PDF lands in `resumes/<company-or-role>/rendercv_output/`.

### Tips

- Keep the master honest and complete; cut in the tailored copies, never from the master.
- A tailored resume should fit one page; the master is allowed to sprawl.
- The `design:` block in the master carries commented engineeringresumes defaults; uncomment to tweak. Full reference: [RenderCV docs](https://docs.rendercv.com/user_guide/structure_of_the_yaml_input_file/).
