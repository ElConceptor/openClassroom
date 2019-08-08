import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'blogTest';
  /* initial post list array */
  PostListInit = [
    
    { 
        title :"Premiere info" , 
        content : "Vous allez créer une application simple de type blog.  Cette application va afficher les posts du blog, et chaque post aura un bouton permettant de love it ou de don't love it"  ,
        lover : 2, date : new Date()},
    { 
        title :"deuxieme post : règles" , 
        content : "En termes de structure : votre AppComponent contiendra l'array des posts, et il le passera à un component PostListComponent votre PostListComponent affichera un PostListItemComponent pour chaque post dans l'array qu'il a reçu chaque PostListItemComponent affichera le titre, le contenu et la date de création du post dans le template  les PostListItemComponent auront des boutons qui permettent d'augmenter et de diminuer le nombre de loveIts — cette modification aura uniquement un effet sur le component, et n'a pas besoin d'être remontée au component parent" 
       , lover : -1},
    
    { title :"Et encore un post pour le bonus" , 
      content : "Bonus : créez un type pour les post, appelé Post, afin de rendre votre code plus lisible.  Vous pouvez même y intégrer un constructeur qui attribue automatiquement la date !" 
        ,date : new Date()}
  ];
}
