package de.unistuttgart.ipvs.as.flexmash.nodefragments;

import org.json.JSONException;
import org.json.JSONObject;

import de.unistuttgart.ipvs.as.flexmash.enums.DataProcessingDescriptionEnum;

public class DataProcessingDescriptions {
	
	public static String getSourceCode(DataProcessingDescriptionEnum type, JSONObject node) throws JSONException {
		
		String sourceCode = "";
		
		switch (type) {
			case START:
				sourceCode = "context.global.allarticles = new Array();context.global.allurls = new Array();context.global.categories = new Array();context.global.counter = 0;return msg";
				break;
			case END:
				sourceCode = "var htmlString;\nvar currentArticle = context.global.categories[context.global.counter-1];\nvar searchKeywords = \"\";\nfor (var i= 0; i < currentArticle.length; i++) {\n		var keyword = currentArticle[i]._;\n	keyword = keyword.replace(',', '');\n	if (i != currentArticle.length-1) {\n		searchKeywords = searchKeywords + keyword + ',';\n	} else {\n		searchKeywords = searchKeywords + keyword;\n	}\n}\nif (context.global.counter == 1) {\n	htmlString = '<html><head><link rel=\"stylesheet\" href=\"https://maxcdn.bootstrapcdn.com/bootstrap/3.3.4/css/bootstrap.min.css\"><title>Data Mashup Result (Time-Critical) </title></head><body><table class=\"table table-striped\" style=\"width: 100%;\"><tr><th>Article</th><th>Keywords</th><th>Overall Sentiment</th><th>Example Tweets</th></tr>' + \n	'<tr><td>' + msg.article + ' (<a href=\"' + context.global.url + '\" target=\"_blank\">link)</td><td>' + searchKeywords + '</td><td>' + msg.payload + '</td><td>';\n	for (var i = 0; i < context.global.rendering.length; i++) {\n		htmlString = htmlString + context.global.rendering[i] + '<b> (Score: ' + context.global.scores[i] + ')</b><hr/>';\n}\n	htmlString = htmlString + '</td></tr>';\n	msg.payload = htmlString;\n	context.global.exampleTweets = new Array();\n	context.global.scores = new Array();\n	context.global.rendering = new Array();\n	//context.global.allarticles = new Array();\n	//context.global.allurls = new Array();\n	return [msg,msg];\n} else if (context.global.counter < 20) {\n	console.log('Sentiments for: ' + msg.article); \n	console.log(msg.payload);\n	htmlString = '<tr><td>' + msg.article + ' (<a href=\"' + context.global.url + '\" target=\"_blank\">link)</td><td>' + searchKeywords + '</td><td>' + msg.payload + '</td><td>';\n	for (var i = 0; i < context.global.rendering.length; i++) {\n		htmlString = htmlString + context.global.rendering[i] + '<b> (Score: ' + context.global.scores[i] + ')</b><hr/>';\n	}\n	htmlString = htmlString + '</td></tr>';\n	msg.payload = htmlString;\n	context.global.exampleTweets = new Array();\n	context.global.scores = new Array();\n	context.global.rendering = new Array();\n	//context.global.allarticles = new Array();\n	//context.global.allurls = new Array();\n	return [msg,msg];\n} else if (context.global.counter == 20) {\n	htmlString = '<tr><td>' + msg.article + ' (<a href=\"' + context.global.url + '\" target=\"_blank\">link)</td><td>' + searchKeywords + '</td><td>' + msg.payload + '</td><td>';\n	for (var i = 0; i < context.global.rendering.length; i++) {\n		htmlString = htmlString + context.global.rendering[i] + '<b> (Score: ' + context.global.scores[i] + ')</b><hr/>';\n	}\n	htmlString = htmlString + '</td></tr></table></body></html>';\n	msg.payload = htmlString;\n	context.global.exampleTweets = new Array();\n	context.global.scores = new Array();\n	context.global.rendering = new Array();\n	//context.global.allarticles = new Array();\n	//context.global.allurls = new Array();\n	return [msg,msg];\n} else {\n	return null;\n}\n";
				break;
			case FILTER:
				sourceCode = "var articles = msg.payload.rss.channel[0].item;\nvar keyword = '" + node.get("filter_criteria") + "';\nfor (var j = 0; j < articles.length; j++){\n	var currentArticle = articles[j];\n		for (var i= 0; i < currentArticle.category.length; i++) {\n		var tag = currentArticle.category[i]._;\n		if (tag.indexOf(keyword) != -1) {\n			articles.splice(j, 1);\n			break;\n		}\n	}\n}\nreturn msg;";
				break;
			case MERGE:
				sourceCode = "context.values = context.values || new Array();\ncontext.values.push(msg);\nvar totalScore = 0;\nif (context.values.length == 5) {\nfor (var i=0; i < context.values.length; i++) {\nvar currentMessage = context.values[i];\n	console.log('Current Score' + currentMessage.sentiment.score);\ntotalScore = totalScore + currentMessage.sentiment.score;console.log('Total Score at the moment: ' + totalScore);\n}\ntotalScore = totalScore / 5;\nif (totalScore > 0) {\nmsg.payload = 'Sentiment is Positive!';\n} else if (totalScore < 0) {\nmsg.payload = 'Sentiment is Negative!';\n} else {\nmsg.payload = 'Sentiment is Neutral!';\n}\nmsg.article = context.global.article;\ncontext.values = new Array();\nreturn msg;\n}";
				break;
			case SENTIMENT_ANALYTICS:
				sourceCode = "context.global.exampleTweets = context.global.exampleTweets || new Array();context.global.exampleTweets.push(msg.payload);context.global.scores = context.global.scores || new Array();context.global.scores.push(msg.sentiment.score);console.log(msg.sentiment);\ncontext.global.rendering = context.global.rendering || new Array();context.global.rendering.push(msg.render);\nreturn msg;";
				break;
			case NAMED_ENTITY_ANALYTICS:
				sourceCode = "var articles; \nif (context.global.counter == 0) {\n	articles = msg.payload.rss.channel[0].item;\n}\nvar titles = new Array();\nvar searchKeywords = new Array();\nvar title;\nif (context.global.allarticles.length > 0) {\n	console.log('Number of Articles: ' + context.global.allarticles.length);\n	console.log('Current Article: ' + context.global.allarticles[context.global.counter][0]);\n	context.global.article=context.global.allarticles[context.global.counter][0];\n	context.global.url=context.global.allurls[context.global.counter][0];\n	//msg.payload = context.global.allarticles[context.global.counter][0].replace(/ /g,',');\n	var currentArticle = context.global.categories[context.global.counter];\n	var searchKeywords = '';\n	for (var i= 0; i < currentArticle.length; i++) {\n		var keyword = currentArticle[i]._;\n		keyword = keyword.replace(',', '');\n		if (i != currentArticle.length-1) {\n			searchKeywords = searchKeywords + keyword + ',';\n		} else {\n			searchKeywords = searchKeywords + keyword;\n		}\n	}\n	msg.payload = searchKeywords;\n	console.log('Keywords: ' + searchKeywords);\n	context.global.counter++;\n	return msg;\n} else {\n	for (var i=0; i < articles.length; i++ ) {\n		title = articles[i].title;\n		context.global.allurls.push(articles[i].link);\n		context.global.allarticles.push(title);\n		context.global.categories.push(articles[i].category);\n		titles.push(title);\n	}\n	context.global.article=context.global.allarticles[context.global.counter][0];\n	context.global.url=context.global.allurls[context.global.counter][0];\n	var currentArticle = context.global.categories[context.global.counter];\n	var searchKeywords = '';\n	for (var i= 0; i < currentArticle.length; i++) {\n		var keyword = currentArticle[i]._;\n		keyword = keyword.replace(',', '');\n		if (i != currentArticle.length-1) {\n			searchKeywords = searchKeywords + keyword + ',';\n		} else {\n			searchKeywords = searchKeywords + keyword;\n		}\n	}\n	msg.payload = searchKeywords;\n	console.log('Keywords: ' + searchKeywords);\n	context.global.counter++;\n	return msg;\n}\n";
				break;
		}
			
		return sourceCode;
		
	}
}
