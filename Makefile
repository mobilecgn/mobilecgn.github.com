build:
	bundle exec jekyll build --future
publish: build
	rsync -r --stats _site/ mobilecologne@www.mobilecologne.de:www/
run:
	bundle exec jekyll server --future --watch
