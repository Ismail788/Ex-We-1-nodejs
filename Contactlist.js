const Contact = require("./Contact.js");
const fs = require("fs");
const util = require("util");
const read = require("./read.js");
const load = require("./load.js");
//const Contactlist = require("./Conatctlist");

const writeFile = util.promisify(fs.writeFile);

class ContactList {
	constructor(filename){
		this.list = [];
		this.filename = filename;
	}

	addContact(contact){
		if(contact instanceof Contact){
			this.list.push(contact);
		}
	}

	save(){
		return writeFile(this.filename, JSON.stringify(this.list), "utf8");
	}
load(){
	const readFilePromise = readFile(this.filename, 'utf8');
	return readFilePromise
	.then(fileString => {
		this.list = JSON.parse(fileString)
		.map(contactObj => new Contact(
			contactObj));
			return promise.resolve(null);
	});
}
read(){

}
};
