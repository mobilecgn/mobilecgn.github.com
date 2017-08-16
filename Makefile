build:
	bundle exec jekyll build --future
run:
	bundle exec jekyll server --future --watch
publish
	echo "The latest version will be automatically deployed to netlify when pushed to GitHub."
	false

