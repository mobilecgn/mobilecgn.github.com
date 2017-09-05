run:
	bundle exec jekyll server --future --watch

build:
	bundle exec jekyll build --future

publish:
	echo "The latest version will be automatically deployed to netlify when pushed to GitHub."
	false
