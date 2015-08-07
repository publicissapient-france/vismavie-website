'use strict';

angular.module('app')
    .controller('DetailsCtrl', ['$scope', '$location', function ($scope, $location) {

        var id = $location.search().id || 1;

        $scope.changeData = function(id) {


            if (id == 'Président') {
                $scope.name = 'luc';
                $scope.sourceImgBg = 'img/bg_ceo.png';
                $scope.sourceImgBgMini = 'img/bg_ceo_560.png';
                $scope.phraseConsulte = 'Tiens prends les clefs et amuse toi bien !';
                $scope.nomConsulte = 'Luc Legardeur, Président';
                $scope.expert = 'L’EXPERT';
                $scope.apprenti = 'L’APPRENTIE';
                $scope.phraseConsultant = 'C’est qui le patron ???';
                $scope.nomConsultant = 'Laurène Vol, Consultante';
                $scope.rond1 = 'img/laurene_vol.png';
                $scope.quote1 = 'Journée enrichissante, passionante, beaucoup de moment clés. Participation à un comité de direction : très instructif. Lorsque les « vis ma vie » ont été annoncés, je me suis dit : « voilà une bonne opportunité d’en apprendre d’avantage sur un métier un peu mystique ». Me voilà donc quelques minutes plus tard à me jeter sur la feuille de CEO, en agrémentant mon nom de smileys, histoire de mettre toutes les chances de mon côté.En découvrant la répartition, et après avoir lancé un « c’est qui le patron ??!! » de circonstance, j’ai commencé à imaginer une journée de folie, à courir dans tous les sens en prenant des décisions super importantes. Un peu comme dans les séries américaines où 10 assistants courent derrière le patron en lui faisant signer des papiers entre 2 meetings ultra confidentiels.';
                $scope.role_plus = 'Le côté touche à tout.';
                $scope.role_moins = 'Je trouverais ça frustrant de ne pouvoir rentrer à fond dans les sujets, faute de temps et du nombre de choses à gérer.';
                $scope.gratifiante = 'Le partage de la bonne parole.';
                $scope.ingrate = 'Peu de temps pour creuser un projet.';
                $scope.ccl = 'En conclusion : C’est pas moi le patron, et c’est très bien comme ça !'
                $scope.video = 'https://www.youtube.com/embed/2twefLKkW0o';

            }

            else if (id == 'CTO') {
                $scope.name = 'pablo';
                $scope.expert = 'L’EXPERT';
                $scope.sourceImgBg = 'img/bg_cto.png';
                $scope.sourceImgBgMini = 'img/bg_cto_560.png';
                $scope.phraseConsulte = 'Troll en chef';
                $scope.nomConsulte = 'Pablo Lopez, CTO';
                $scope.apprenti = 'L’APPRENTI';
                $scope.phraseConsultant = '50 kilos tout mouillé';
                $scope.nomConsultant = 'Alexandre Hebert, Consultant';
                $scope.rond1 = 'img/alexandre_hebert.png';
                $scope.quote1 = 'Une journée haute en chaleur, ponctuée par de nombreux déplacements aux quatres coins du siège, et durant laquelle j’ai pu suivre partout un CTO très volubile qui n’a pas hésité à répondre à toutes mes questions, en me faisant par la même occasion découvrir son métier des caves au grenier : des difficultés qu’il rencontre au quotidien jusqu’aux aspects les plus passionnants ! C T Ouf ! Heureusement pour moi, vis ma vie ne veut pas dire "Prend ma place" ! Pfiou !';
                $scope.role_plus = 'La variété des responsabilités / tâches.';
                $scope.role_moins = 'La température ( pas celle de mon CTO, celle de l’air ;) )';
                $scope.gratifiante = 'La force de proposition / décision du CTO quant au choix des missions qui pourraient intéresser les Xebians.';
                $scope.ingrate = 'Les relances par mail.';
                $scope.video = 'https://www.youtube.com/embed/2twefLKkW0o';
            }

            else if (id == 'Dir. Xebia Studio') {
                $scope.name = 'thibaud';
                $scope.sourceImgBg = 'img/bg_studio.png';
                $scope.sourceImgBgMini = 'img/bg_studio_560.png';
                $scope.phraseConsulte = 'Le forfait, oui, mais seulement au ski !';
                $scope.nomConsulte = 'Thibaud Cavin, Responsable Xebia Studio';
                $scope.phraseConsultant = 'A grand, grand et demi ?';
                $scope.expert = 'L’EXPERT';
                $scope.apprenti = 'L’APPRENTI';
                $scope.nomConsultant = 'Emmanuel Sciara, Coach Agile';
                $scope.rond1 = 'img/emmanuel_sciara.png';
                $scope.quote1 = 'Beaucoup de responsabilité, placement des consultant selon leur humeur, envie, très difficile, RESPECT MAN !';
                $scope.role_plus = 'Plus';
                $scope.role_moins = 'Plus';
                $scope.gratifiante = 'Plus';
                $scope.ingrate = 'Moins';
                $scope.moins2 = 'Moins';
                $scope.moins3 = 'Moins';
                $scope.video = 'https://www.youtube.com/embed/2twefLKkW0o';

            }

            else if (id == 'Dir. Recrutement') {
                $scope.name = 'laetitia';
                $scope.sourceImgBg = 'img/bg_recrutement.png';
                $scope.sourceImgBgMini = 'img/bg_recrutement_560.png';
                $scope.phraseConsulte = 'Une chasseuse sachant chasser…';
                $scope.nomConsulte = 'Laetitia Janné, Responsable du recrutement';
                $scope.phraseConsultant = 'La puissance de la funk !';
                $scope.nomConsultant = 'Jeremy Vinai, Consultant';
                $scope.expert = 'L’EXPERTE';
                $scope.apprenti = 'L’APPRENTI';
                $scope.rond1 = 'img/jeremy_vinai.png';
                $scope.quote1 = '"Jeremy Vinai société Xebia bonjour." Une journée très agréable autour du metier de responsable recrutement où j’ai pu voir comment gérer la recherche de profils, gérer l’organisation de l’équipe recrutement, entretenir le contact avec les futurs potentiels recrutés et s’occuper des nouveaux Xebians et de leur bonne intégration.Beaucoup d’intéraction en interne comme avec l’exterieur !';
                $scope.role_plus = 'Plus';
                $scope.role_moins = 'Plus';
                $scope.gratifiante = 'Plus';
                $scope.ingrate = 'Moins';
                $scope.moins2 = 'Moins';
                $scope.moins3 = 'Moins';
                $scope.video = 'https://www.youtube.com/embed/2twefLKkW0o';

            }

            else if (id == 'Dir. Marketing') {
                $scope.name = 'anne';
                $scope.sourceImgBg = 'img/bg_marketing_black.png';
                $scope.sourceImgBgMini = 'img/bg_marketing_560.png';
                $scope.phraseConsulte = 'Du violet du violet ... Je veux du violet partout !!';
                $scope.nomConsulte = 'Anne Beauchart, Directrice Marketing';
                $scope.expert = 'L’EXPERTE';
                $scope.apprenti = 'L’APPRENTIE';
                $scope.phraseConsultant = 'Marketing KESAKO ';
                $scope.nomConsultant = 'Sameh Ben Fredj, Consultante';
                $scope.rond1 = 'img/sameh_ben_fredj.png';
                $scope.quote1 = 'Le marketing, maintenant JE CONNAIS !';
                $scope.role_plus = 'Plus';
                $scope.role_moins = 'Plus';
                $scope.gratifiante = 'Plus';
                $scope.ingrate = 'Moins';
                $scope.moins2 = 'Moins';
                $scope.moins3 = 'Moins';
                $scope.video = 'https://www.youtube.com/embed/2twefLKkW0o';

            }


            else if (id == 'COO') {
                $scope.name = 'christophe';
                $scope.sourceImgBg = 'img/bg_coo.png';
                $scope.sourceImgBgMini = 'img/bg_coo_560.png';
                $scope.phraseConsulte = 'Délégation idoine';
                $scope.nomConsulte = 'Christophe Heubes, COO';
                $scope.phraseConsultant = 'Opérations TEKNIKE';
                $scope.expert = 'L’EXPERT';
                $scope.apprenti = 'L’APPRENTI';
                $scope.nomConsultant = 'Jéremie Martinez, Consultant';
                $scope.rond1 = 'img/jeremie_martinez.png';
                $scope.quote1 = 'Opérations !';
                $scope.role_plus = 'Plus';
                $scope.role_moins = 'Plus';
                $scope.gratifiante = 'Plus';
                $scope.ingrate = 'Moins';
                $scope.moins2 = 'Moins';
                $scope.moins3 = 'Moins';
                $scope.video = 'https://www.youtube.com/embed/2twefLKkW0o';

            }

            else if (id == 'Manager') {
                $scope.name = 'jean-louis';
                $scope.sourceImgBg = 'img/bg_manager.png';
                $scope.sourceImgBgMini = 'img/bg_manager_560.png';
                $scope.phraseConsulte = 'I manage, you manage, he manages';
                $scope.nomConsulte = 'Jean-Louis Rigau, Manager';
                $scope.phraseConsultant = 'Je veux manager ! ';
                $scope.expert = 'L’EXPERT';
                $scope.apprenti = 'L’APPRENTI';
                $scope.nomConsultant = 'Antoine Michaud, Consultant';
                $scope.rond1 = 'img/antoine_michaud.png';
                $scope.quote1 = 'Manager un jour, manager pour toujours !';
                $scope.role_plus = 'Plus';
                $scope.role_moins = 'Plus';
                $scope.gratifiante = 'Plus';
                $scope.ingrate = 'Moins';
                $scope.moins2 = 'Moins';
                $scope.moins3 = 'Moins';
                $scope.video = 'https://www.youtube.com/embed/2twefLKkW0o';

            }

            else if (id == 'Dir. Commerciale') {
                $scope.name = 'estelle';
                $scope.sourceImgBg = 'img/bg_commerce.png';
                $scope.sourceImgBgMini = 'img/bg_commerce_560.png';
                $scope.phraseConsulte = 'Daf punk';
                $scope.nomConsulte = 'Estelle Boyer, Directrice Commerciale';
                $scope.phraseConsultant = 'Choucroute garnie c"est la vie !';
                $scope.expert = 'L’EXPERTE';
                $scope.apprenti = 'L’APPRENTI';
                $scope.nomConsultant = 'Benjamin Lacroix, Consultant';
                $scope.rond1 = 'img/benjamin_lacroix.png';
                $scope.quote1 = 'Journée de ouf ! Je kiff négocier chez le client ! Je fais faire une reconversion !';
                $scope.role_plus = 'Plus';
                $scope.role_moins = 'Plus';
                $scope.gratifiante = 'Plus';
                $scope.ingrate = 'Moins';
                $scope.moins2 = 'Moins';
                $scope.moins3 = 'Moins';
                $scope.video = 'https://www.youtube.com/embed/2twefLKkW0o';

            }

            else if (id == 'DAF') {
                $scope.name = 'nadia';
                $scope.sourceImgBg = 'img/bg_daf.png';
                $scope.sourceImgBgMini = 'img/bg_daf_560.png';
                $scope.phraseConsulte = 'Pas de justif pas de fric !';
                $scope.nomConsulte = 'Nadia Sidhoum, DAF';
                $scope.phraseConsultant = 'DAFicionado !';
                $scope.expert = 'L’EXPERTE';
                $scope.apprenti = 'L’APPRENTI';
                $scope.nomConsultant = 'Clément Heliou, Consultant';
                $scope.rond1 = 'img/clement_heliou.png';
                $scope.quote1 = 'Justification, fric, pognon, chic ! La DAF une fonction, un métier, une passion, être dévoué !';
                $scope.role_plus = 'Plus';
                $scope.role_moins = 'Plus';
                $scope.gratifiante = 'Plus';
                $scope.ingrate = 'Moins';
                $scope.video = 'https://www.youtube.com/embed/2twefLKkW0o';

            }


        };

        $scope.changeData(id);

        $scope.$on('changeId', function($event, id) {
            $scope.changeData(id);
        });

        $scope.gotoConcept = function() {

            $location.hash('concept');
            $anchorScroll();
        };




    }]);


/*
angular.module('app')
    .factory('MonService', [function () {
        var people = [
            {
                name: 'nadia',
                sourceImgBg: 'img/bg_daf.png',
                sourceImgBgMini: 'img/bg_daf_560.png'
            },
            {
                name: 'asdine',
                sourceImgBg: 'img/bg_daf.png',
                sourceImgBgMini: 'img/bg_daf_560.png'
            }
        ];

        return {
            get: function (id) {
                return people[id];
            }
        };

    }]);**/