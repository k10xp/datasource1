.PHONY: get post put delete get1 get_subset

endpoint = http://localhost:8181

get:
	curl ${endpoint}/neovim

get1:
	curl ${endpoint}/lazyvim/4

get_subset:
	curl ${endpoint}/neovim/6/9

delete:
	curl -X DELETE ${endpoint}/nvchad/2

post:
	curl -X POST -H "Content-Type: application/json" -d \
	'{"name":"v0.11.1","zipball_url":"api+url","tarball_url":"tag+url","commit":{"sha":"123","url":"too long"},"node_id":"type something"}' \
	${endpoint}/neovim/5

put:
	curl -X PUT -H "Content-Type: application/json" -d \
	'{"name":"v0.11.1","zipball_url":"api+url","tarball_url":"tag+url","commit":{"sha":"123","url":"too long"},"node_id":"type something"}' \
	${endpoint}/lazyvim/5
