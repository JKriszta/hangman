const words = ['alma','keretrendszer','vakáció','iskola','tél','tanfolyam','város'];
export const abc = ['A','Á','B','C','D','E','É','F','G','H','I','Í','J','K','L','M','N','O','Ó','Ö','Ő','P','Q','R','S','T','U','Ú','Ü','Ű','V','W','X','Y','Z'];

export const randomWord = () => {
	return words[Math.floor(Math.random() *words.length)]
};
