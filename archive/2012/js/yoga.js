$(document).ready(function(){
						   // span tag of keywords used to collect key poses and add them to a list at the end of the document
	var keywordsText= $('#keywordsDiv').html();
	$('strong').each(function(){
		keywordsText += '[' + $(this).html() + '] ';						 
	});	
	
	if (keywordsText) {
		keyWordsStr = '<p>' + keywordsText + '</p>';
		$('#keywordsDiv').html(keyWordsStr);
	}
	
});


window.onload = function() {
	
// Keys
var keys = ['Adho Mukha Svanasana','Adho Murkha Vrksasana','Akarna Dhanurasana','Ardha Chandrasana','Ardha Navasana','Badda Konasana','Bakasana','Bhujangasana','Chaturanga Dandasana','Dandasana',' Dhanurasana','Ekapada Sarvangasana','Eka Pada Urdhva Dhanurasana','Garudasana','Halasana','Hanu Manasana','Janusirsasana','Jathara Parivartanasana','Karnapidasana','Maha Mudra','Natarajasana','Padahastasana','Padangusthasana','Parighasana','Paripurna Navasana','Parivrttaparsvakonasana','Parivrtta Trikonasana','Parsva Halasana','Parsvaika Pada Sarvangasana','Parsvottanasana','Paschi Motanasana','Prasarita PadottanasanaI','Prasarita Padottanasana II','Purvottanasana','Salabhasana','Salamba Sarvangasana I','Salamba Sirsana','Savasana','Siddhasana','Simhasana','Supta Konasana','Tadasana','Urdhva Dhanurasana','Urdhva Mukha Svanasana','Urdhva Prasarita Ekapadasana','Urdhva Prasarita Padasana','Ustrasana','Utkatasana','Uttanasana','Utthita Hasta Padagusthasana','Utthita Parsvakonasana','Utthita Trikonasana','Vasisthasana I','Virabhadrasana I','Virabhadrasana II','Virabhadrasana III','Vrksasana',
	// Missing from the image files:			
'adho mukha virasana','anatasana','chakrasana','Chatush Padasana','ekapada salamba sirsasana','janu sirsasana','hastasana','marichyasana','niralamba sarvangasana','padmasana','parivrtta ardha chandrasana','parivrtta parsvakonasana','parivrtta upavistha konasana','parivrtta utthita hasta padasana','pincha mayurasana','prasarita padottanasana','salabasana','salamba sarvangasana','salamba sirsasana','sarvangasana','setu bandha sarvangasana','Supta Baddha Konasana','supta padagusthasana','supta padangusthasana','suptakonasana','swastikasana','tittibhasana','Upavista Konasana','urdhva hasta padasana','urdhva virasana','vajrasana','viparita dandasana','Viparita Karani','vasisthasana', 
	// Partials
'I','II','III','parivrtta','eka pada','setu bandha','dwi pada','adho mukha',]
// Create regular expression for a global and dynamic search and replace
var pattern = [];
for (var i=0; i<keys.length; i++) {
    // Create RegExp. This section is needed to deal with special chars
    pattern.push(keys[i].replace(/([[^$.|?*+(){}])/g, "\\$1"));
}
pattern = "\\b(" + pattern.join("|") + ")\\b";
pattern = new RegExp(pattern, "gi"); //replace g by gi for case-insensitivity

var li = document.getElementsByTagName("li");
for (var i=0, l=li.length; i<l; i++) {
    li[i].innerHTML = li[i].innerHTML.replace(pattern, "<em>$1</em>");
}

};