build:
	jekyll build
publish: build
	rsync -r --stats _site/ mobilecologne@79.125.20.104:www/
	rsync -r --stats _site/ mobilecologne@46.252.25.137:www/
run:
	jekyll server --watch

