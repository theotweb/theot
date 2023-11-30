#!/bin/zsh
# THEOT
# 23/11/30
#
# create director "t"
# use "convert" to make thumbnails for a set of images
#   note - expects image names to start with "Eth"
# make a text file carousel.txt containing the image file-names
mkdir t
for f in Eth*; do
    x=$(basename $f)
    echo $x
   /opt/homebrew/bin/convert $x -resize 300x400 ./t/thumb_$x
done
ls Ethiopic* > carousel.txt
