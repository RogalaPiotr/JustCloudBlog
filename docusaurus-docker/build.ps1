# PowerShell script to build the Docusaurus Docker image
param(
    [Parameter(Mandatory=$false)]
    [string]$Version = "3.9.2",

    [Parameter(Mandatory=$false)]
    [string]$ImageName = "docusaurus",

    [Parameter(Mandatory=$false)]
    [string]$Tag = "latest",

    [Parameter(Mandatory=$false)]
    [switch]$Production
)

Write-Host "========================================" -ForegroundColor Cyan
Write-Host "Building the Docusaurus Docker image" -ForegroundColor Cyan
Write-Host "========================================" -ForegroundColor Cyan
Write-Host ""

$FullImageName = "${ImageName}:${Tag}"

if ($Production) {
    Write-Host "🏭 Mode: PRODUCTION" -ForegroundColor Yellow
    Write-Host "📦 Image: $FullImageName" -ForegroundColor Green
    Write-Host "📌 Docusaurus Version: $Version" -ForegroundColor Green
    Write-Host ""

    # Check if the 'website' directory exists
    if (-not (Test-Path ".\website")) {
        Write-Host "❌ Error: The '.\website' directory does not exist!" -ForegroundColor Red
        Write-Host "💡 First, create a Docusaurus project in the 'website' directory" -ForegroundColor Yellow
        exit 1
    }

    Write-Host "🔨 Building the production image..." -ForegroundColor Cyan
    docker build `
        --build-arg DOCUSAURUS_VERSION=$Version `
        -f Dockerfile.production `
        -t $FullImageName `
        .\website
} else {
    Write-Host "🔧 Mode: DEVELOPMENT" -ForegroundColor Yellow
    Write-Host "📦 Image: $FullImageName" -ForegroundColor Green
    Write-Host "📌 Docusaurus Version: $Version" -ForegroundColor Green
    Write-Host ""

    Write-Host "🔨 Building the development image..." -ForegroundColor Cyan
    docker build `
        --build-arg DOCUSAURUS_VERSION=$Version `
        -f Dockerfile `
        -t $FullImageName `
        .
}

if ($LASTEXITCODE -eq 0) {
    Write-Host ""
    Write-Host "✅ The image was built successfully!" -ForegroundColor Green
    Write-Host ""
    Write-Host "========================================" -ForegroundColor Cyan
    Write-Host "Next steps:" -ForegroundColor Cyan
    Write-Host "========================================" -ForegroundColor Cyan

    if ($Production) {
        Write-Host "Run the container:" -ForegroundColor Yellow
        Write-Host "  docker run -d -p 80:80 --name docusaurus-prod $FullImageName" -ForegroundColor White
        Write-Host ""
        Write-Host "The site will be available at:" -ForegroundColor Yellow
        Write-Host "  http://localhost" -ForegroundColor White
    } else {
        Write-Host "Run the container:" -ForegroundColor Yellow
        Write-Host "  docker run -d -p 80:80 -v `${PWD}/website:/app --name docusaurus-dev $FullImageName" -ForegroundColor White
        Write-Host ""
        Write-Host "Or use Docker Compose:" -ForegroundColor Yellow
        Write-Host "  docker-compose up -d" -ForegroundColor White
        Write-Host ""
        Write-Host "The site will be available at:" -ForegroundColor Yellow
        Write-Host "  http://localhost" -ForegroundColor White
    }
} else {
    Write-Host ""
    Write-Host "❌ An error occurred while building the image!" -ForegroundColor Red
    exit 1
}
