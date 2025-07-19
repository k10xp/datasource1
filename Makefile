.PHONY: install_fmt fmt clean

install_fmt: #Install prettier
	npm install --save-dev --save-exact prettier

fmt:
	npx prettier . --write

clean:
	find . -type d -name "node_modules" | xargs rm -rf