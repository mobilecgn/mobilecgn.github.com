build:
	jekyll build
publish: build
	rsync -r --stats _site/ mobilecologne@www.mobilecologne.de:www/
run:
	jekyll server --watch

