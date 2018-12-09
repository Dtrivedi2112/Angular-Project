export class Profile{

	public name: string;
	public location: string;
	public image: string;
	public about: string;
	public phone: string;
	public linkedin: string;
	public twitter: string;
	public facebook: string;
	public birthday: string;

	constructor(name: string, location: string, image: string, about: string, phone: string, linkedin: string, twitter: string, 
		facebook: string, birthday: string)
	{
		this.name= name;
		this.location = location;
		this.image = image;
		this.about = about;
		this.phone = phone;
		this.linkedin = linkedin;
		this.twitter = twitter;
		this.facebook = facebook;
		this.birthday = birthday;


	}
}