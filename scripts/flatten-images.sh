#!/bin/bash

# Script to copy images from subdirectories to the root of public/static/
# This is needed because Decap CMS image picker doesn't show nested folder images

echo "🖼️  Flattening images for Decap CMS..."

cd "$(dirname "$0")/.." || exit

# Counter for copied files
count=0

# Find all images in subdirectories and copy them to root with descriptive names
find public/static -mindepth 2 -type f \( -name "*.png" -o -name "*.jpg" -o -name "*.jpeg" -o -name "*.webp" -o -name "*.gif" \) | while read -r file; do
    # Get the directory name and filename
    dir=$(dirname "$file" | xargs basename)
    filename=$(basename "$file")
    extension="${filename##*.}"
    name="${filename%.*}"
    
    # Create a new filename with directory prefix (kebab-case)
    new_name=$(echo "${dir}-${name}" | tr '[:upper:]' '[:lower:]' | tr ' ' '-')
    new_file="public/static/${new_name}.${extension}"
    
    # Copy only if the file doesn't already exist at root
    if [ ! -f "$new_file" ]; then
        cp "$file" "$new_file"
        echo "✅ Copied: $file -> $new_file"
        count=$((count + 1))
    fi
done

echo ""
echo "📊 Total images at root level:"
find public/static -maxdepth 1 -type f \( -name "*.png" -o -name "*.jpg" -o -name "*.jpeg" -o -name "*.webp" -o -name "*.gif" \) | wc -l

echo ""
echo "✨ Done! Images are ready for Decap CMS."
echo "💡 Remember to commit and push these changes to see them in Netlify."

