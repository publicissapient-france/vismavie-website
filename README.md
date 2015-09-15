Pour la mise en ligne 4 étape :
1-rendre accessible la page de directrice recrutement
2-débloquer le dérouleur dans le header
3-débloquer l'encart dans le footer
4-mettre la vidéo Youtube sur publique
5-mettre le lien de l'article de blog

1-rendre accessible la page de directrice recrutement
Dans le fichier ctrl.js > sélectionner la page à débloquer et aller dans l'onglet edit >comment > toggle comment

2-débloquer le dérouleur dans le header
dans le fichier directive > fichier épisode.html 
Dans la div toolbar et <md-button ng-disabled, on doit supprimer || item == 'Dir. Recrutement'
Images intégrées 1

3-débloquer l'encart dans le footer
Images intégrées 2

dans le fichier directive > fichier menu.html
supprimer ng-disabled="true" et le "disabled" dans class="md-raised md-primary md_button_video disable">

5-mettre le lien de l'article de blog
Dans le fichier ctrl.js dans la section > scope.blog_article = "http://blog.xebia.fr"; changer par l'url de l'article !

Pour déployer je fais donc 
terminal : 
Je vais dans mon repo vis ma vie
grunt (entrer)
je fais mes diverses modifs

ctrl+c

git add .

git status

git commit -m "message"

git push

grunt deploy
