#!/bin/sh
set -e

echo "=========================================="
echo "Docusaurus Docker Container"
echo "Version: ${DOCUSAURUS_VERSION}"
echo "=========================================="

# Check if the Docusaurus project already exists
if [ ! -f "/app/package.json" ]; then
    echo "⚠️  Docusaurus project not found!"
    echo "📦 Creating a new Docusaurus project..."
    
    # Create a temporary directory
    TEMP_DIR=$(mktemp -d)
    cd "$TEMP_DIR"
    
    # Initialize the project with the specified version (JavaScript, no installation)
    npx create-docusaurus@${DOCUSAURUS_VERSION} docusaurus-site classic --javascript --skip-install
    
    # Move files to /app
    mv docusaurus-site/* docusaurus-site/.[!.]* /app/ 2>/dev/null || true
    
    # Cleanup
    cd /app
    rm -rf "$TEMP_DIR"
    
    echo "✅ Docusaurus project created!"
    
    echo "⚙️  Configuring hot reload (webpack polling)..."
    
    cat > /tmp/webpack-plugin.txt << 'EOF'

  // Additional webpack configuration for hot reload
  plugins: [
    function (context, options) {
      return {
        name: 'custom-webpack-config',
        configureWebpack(config, isServer, utils) {
          return {
            watchOptions: {
              poll: 1000,
              aggregateTimeout: 300,
              ignored: /node_modules/,
            },
          };
        },
      };
    },
  ],
};

export default config;
EOF
    
    sed -i '/^export default config;$/d' /app/docusaurus.config.js
    sed -i '$ d' /app/docusaurus.config.js
    sed -i '$ d' /app/docusaurus.config.js
    
    cat /tmp/webpack-plugin.txt >> /app/docusaurus.config.js
    rm /tmp/webpack-plugin.txt
    
    echo "✅ Hot reload configured!"
fi

# Install dependencies if node_modules does not exist
if [ ! -d "/app/node_modules" ]; then
    echo "📦 Installing npm dependencies..."
    npm install
    echo "✅ Dependencies installed!"
fi

echo "🚀 Starting Docusaurus..."
echo "=========================================="

# Execute the passed command
exec "$@"
