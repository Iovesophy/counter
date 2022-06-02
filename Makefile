.PHONY: init
init:
	npm init

.PHONY: install
install:
	npm install --save-dev jest @babel/plugin-transform-modules-commonjs http-server
	npm audit

.PHONY: start
start:
	./node_modules/http-server/bin/http-server

.PHONY: test
test:
	npm run test

