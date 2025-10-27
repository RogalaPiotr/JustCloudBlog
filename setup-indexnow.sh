#!/bin/bash

# IndexNow Setup Script for JustCloud.pl Blog
# This script helps you generate and configure IndexNow API key

echo "=================================================="
echo "  IndexNow Setup - JustCloud.pl Blog"
echo "=================================================="
echo ""

# Color codes
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
RED='\033[0;31m'
NC='\033[0m' # No Color

# Step 1: Generate UUID key
echo -e "${YELLOW}Step 1: Generating IndexNow API Key...${NC}"
API_KEY=$(uuidgen | tr -d '-' | tr '[:upper:]' '[:lower:]')
echo -e "${GREEN}✅ Generated key: ${API_KEY}${NC}"
echo ""

# Step 2: Create key file
echo -e "${YELLOW}Step 2: Creating key verification file...${NC}"
STATIC_DIR="./website/static"
KEY_FILE="${STATIC_DIR}/${API_KEY}.txt"

# Check if static directory exists
if [ ! -d "$STATIC_DIR" ]; then
    echo -e "${RED}❌ Error: Static directory not found: ${STATIC_DIR}${NC}"
    echo "Please run this script from the JustCloudBlog root directory."
    exit 1
fi

# Create key file
echo "${API_KEY}" > "${KEY_FILE}"
echo -e "${GREEN}✅ Created: ${KEY_FILE}${NC}"
echo ""

# Step 3: Update indexnow.js
echo -e "${YELLOW}Step 3: Updating indexnow.js configuration...${NC}"
INDEXNOW_JS="${STATIC_DIR}/scripts/indexnow.js"

if [ -f "$INDEXNOW_JS" ]; then
    # Backup original
    cp "${INDEXNOW_JS}" "${INDEXNOW_JS}.backup"
    
    # Replace placeholder with actual key
    sed -i.bak "s/YOUR_INDEXNOW_KEY_HERE/${API_KEY}/g" "${INDEXNOW_JS}"
    rm "${INDEXNOW_JS}.bak"
    
    echo -e "${GREEN}✅ Updated: ${INDEXNOW_JS}${NC}"
else
    echo -e "${RED}❌ Error: indexnow.js not found: ${INDEXNOW_JS}${NC}"
    exit 1
fi
echo ""

# Step 4: Remove template file
echo -e "${YELLOW}Step 4: Cleaning up template files...${NC}"
TEMPLATE_FILE="${STATIC_DIR}/YOUR_INDEXNOW_KEY_HERE.txt"
if [ -f "$TEMPLATE_FILE" ]; then
    rm "$TEMPLATE_FILE"
    echo -e "${GREEN}✅ Removed template file${NC}"
fi
echo ""

# Summary
echo "=================================================="
echo -e "${GREEN}✅ IndexNow Setup Complete!${NC}"
echo "=================================================="
echo ""
echo "📝 Your IndexNow API Key:"
echo -e "${GREEN}${API_KEY}${NC}"
echo ""
echo "📁 Key file created at:"
echo "${KEY_FILE}"
echo ""
echo "🌐 After deployment, verify at:"
echo "https://blog.justcloud.pl/${API_KEY}.txt"
echo ""
echo "📋 Next steps:"
echo "1. Deploy your site to GitHub Pages"
echo "2. Verify the key file is accessible at the URL above"
echo "3. Test submission in browser console:"
echo "   window.IndexNow.submit('https://blog.justcloud.pl/')"
echo ""
echo "📚 Full documentation: INDEXNOW_SETUP.md"
echo "=================================================="
