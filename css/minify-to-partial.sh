#!/bin/bash
yui-compressor -o '.css$:.min.css' *.css
mv *.min.css "../../layouts/partials" -f
