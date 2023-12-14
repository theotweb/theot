# Notes

## Folder organization

Book folders tend to be organized like this "Bel and the Dragon" whose folder is named "bel"
Most books have 3-character abbreviation. Exceptions include canticles, epjer, psa151, ruth, three.

╭─~/docs/reports/type2/bel on main✘✘✘ 23-12-14 15:35
╰─⠠⠵ tree
.
├── Bel-den.jpg
├── Bel-dot.jpg
├── Bel-dot.pdf
├── book_bel.html
├── carousel.txt
└── manuscripts
├── Ethiopic Dan_01.jpg
├── Ethiopic Dan_02.jpg
├── Ethiopic Dan_03.jpg
├── Ethiopic Dan_04.jpg
└── t
├── thumb_Ethiopic Dan_01.jpg
├── thumb_Ethiopic Dan_02.jpg
├── thumb_Ethiopic Dan_03.jpg
└── thumb_Ethiopic Dan_04.jpg

3 directories, 13 files
╭─~/Documents/data/projects_current/THEOT/web/theot/docs/reports/type2/bel

In this case, carousel.txt contains
Ethiopic Dan_01.jpg
Ethiopic Dan_02.jpg
Ethiopic Dan_03.jpg
Ethiopic Dan_04.jpg

This means that at runtime, the "thumbnail" version of these four files will be loaded into the carousel.
Upon click, the full-sized image will be shown.

## Updating images

To update images in a book, do these things:

1. put the images in the manuscripts folder
1. make thumbnail versions, name them thumb\_? and put them in the /t subfolder of manuscripts
1. update the carousel.txt file to list the ones you want to see.
1. notice that if all you want to do is remove an image, just remove that line in the carousel.txt file
