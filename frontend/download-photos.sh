#!/bin/bash
# Downloads real, free-to-use photography from Unsplash (Unsplash License —
# free for commercial use, no attribution required) directly into the
# correct asset folder. Run this from ~/projects/maldi/frontend after
# applying the code changes from maldi-real-photos.zip.

set -e
cd "$(dirname "$0")/src/assets/images" 2>/dev/null || cd src/assets/images

echo "Downloading hero photo..."
curl -L -o hero-coast.jpg "https://unsplash.com/photos/3ws2fq3VtXk/download?force=true"

echo "Downloading experience photos..."
curl -L -o experience-fishing.jpg "https://unsplash.com/photos/v7mjAAhfcfQ/download?force=true"
curl -L -o experience-snorkel.jpg "https://unsplash.com/photos/tuEtpjghVmg/download?force=true"
curl -L -o experience-sunset.jpg "https://unsplash.com/photos/3O2SgoJetY0/download?force=true"

echo "Downloading accommodation photos..."
curl -L -o accommodation-cottage.jpg "https://unsplash.com/photos/LZwjx0w3yTo/download?force=true"
curl -L -o accommodation-villa.jpg "https://unsplash.com/photos/hKREK9tFA0M/download?force=true"
curl -L -o accommodation-lodge.jpg "https://unsplash.com/photos/M3xkDxubi28/download?force=true"

echo "Done. Run 'ls -la' to confirm all 7 files downloaded with real file sizes (not 0 bytes)."
