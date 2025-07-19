.PHONY: install_fmt nrd fmt clean

install_fmt: #Install prettier
	npm install --save-dev --save-exact prettier

nrd:
	npm run dev

fmt:
	npx prettier . --write

clean:
	find . -type d -name "node_modules" | xargs rm -rf