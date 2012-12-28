build:
	jekyll
publish: build
	rsync -r --stats _site/ mobilecologne@www.mobilecologne.de:www/
run:
	jekyll --server --auto

