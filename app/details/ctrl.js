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
                $scope.quote1 = 'Journée démarrée, enchaînée et terminée sur les chapeaux de roues. Milles choses à faire, à voir et à discuter, toutes plus passionnantes et différentes les unes que les autres. Métier un peu ingrat que celui de CEO : on a pas l’impression de produire grand chose, mais ça ne nous empêche pas de courir dans tous les sens toute la journée et de sortir vidé. Un peu comme un coach agile finalement, mais sans les post-it !';
                $scope.role_plus = 'Le côté touche à tout.';
                $scope.role_moins = 'Je trouverais ça frustrant de ne pouvoir approfondir les sujets, faute de temps et du nombre d’éléments à gérer.';
                $scope.gratifiante = 'Le partage de la bonne parole.';
                $scope.ingrate = 'Peu de temps pour creuser un projet.';
                $scope.ccl = 'En conclusion : C’est pas moi le patron, et c’est très bien comme ça !'
                $scope.video = 'https://www.youtube.com/embed/KsscgrEtfdQ?rel=0';
                $scope.video_twitter = "http://twitter.com/intent/tweet/?url=http://bit.ly/VMV-President-Xebia&hashtags=XebianVMV&via=XebiaFr";
                $scope.video_google = "https://plus.google.com/share?url=http://bit.ly/VMV-President-Xebia";
                $scope.video_linkedin = "https://www.linkedin.com/cws/share?url=http://bit.ly/VMV-President-Xebia";
                $scope.blog_article = "http://blog.xebia.fr/2015/08/25/vis-ma-vie-episode-1-laurene-prend-les-cles-de-xebia/";

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
                $scope.quote1 = 'Une journée haute en chaleur, ponctuée par de nombreux déplacements aux quatres coins du siège, et durant laquelle j’ai pu suivre partout un CTO très volubile qui n’a pas hésité à répondre à toutes mes questions, en me faisant par la même occasion découvrir son métier des caves au grenier : des difficultés qu’il rencontre au quotidien jusqu’aux aspects les plus passionnants ! C T Ouf !';
                $scope.role_plus = 'La variété des responsabilités et des tâches.';
                $scope.role_moins = 'Peu de temps pour réellement approndir les sujets qui nous tiennent à coeur.';
                $scope.gratifiante = 'La force de proposition du CTO quant au choix des missions qui pourraient intéresser les Xebians.';
                $scope.ingrate = 'Les relances par mail.';
                $scope.ccl = 'Heureusement pour moi, vis ma vie ne veut pas dire "Prends ma place" ! Pfiou !'
                $scope.video = 'https://www.youtube.com/embed/qy82p2sr2mQ?rel=0';
                $scope.video_twitter = "http://twitter.com/intent/tweet/?url=http://bit.ly/VMV-CTO-Xebia&hashtags=XebianVMV&via=XebiaFr";
                $scope.video_google = "https://plus.google.com/share?url=http://bit.ly/VMV-CTO-Xebia";
                $scope.video_linkedin = "https://www.linkedin.com/cws/share?url=https://bit.ly/VMV-CTO-Xebia";
                $scope.blog_article = "http://blog.xebia.fr/2015/09/01/vis-ma-vie-episode-2-alexandre-cto-dun-jour/";
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
                $scope.quote1 = 'Il faut savoir faire tourner tout ça ! En faisant en sorte que clients ET Xebians soient contents, s’il vous plait !  Bref, un travail d’équilibriste, pavé de contraintes et de paramètres mouvants : il faut être disponible tout en jonglant avec des œufs et préparer les propositions commerciales. Ce qui m’a vraiment impressionné ? La fluidité du travail d’équipe entre le management Studio, l’opérationnel et le marketing. Pas de problème qui ne trouve de solution !';
                $scope.role_plus = 'Le travail d’équipe avec les autres parties prenantes.';
                $scope.role_moins = 'La préparation de contrats et de soutenances.';
                $scope.gratifiante = 'Les retours clients positifs et l’image qu’on nous donne en retour.';
                $scope.ingrate = 'Ecrire les contrats avec tous les aller-retours client que cela implique.';
                $scope.ccl = 'En conclusion : Enlevez moi la paperasse et je signe !!! Bon, en fait, ça fait partie du job… Ça va être dur !'
                $scope.video = 'https://www.youtube.com/embed/PKSHTaxoHjs?rel=0';
                $scope.video_twitter = "http://twitter.com/intent/tweet/?url=http://bit.ly/XebianVMV-DirectStudio&hashtags=XebianVMV&via=XebiaFr";
                $scope.video_google = "https://plus.google.com/share?url=http://bit.ly/XebianVMV-DirectStudio";
                $scope.video_linkedin = "https://www.linkedin.com/cws/share?url=http://bit.ly/XebianVMV-DirectStudio";
                $scope.blog_article = "http://blog.xebia.fr/2015/09/08/vis-ma-vie-episode-3-emmanuel-directeur-xebia-studio-dun-jour/";
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
                $scope.quote1 = 'Jeremy Vinai, société Xebia, bonjour.\" Durant cette journée très agréable, j’ai pu assimiler toutes les tâches d\'une Directrice Recrutement : gérer la recherche de profils, manager l’équipe recrutement, entretenir le contact avec les futurs potentiels recrutés et accueillir les nouveaux Xebians, pour une bonne intégration. Ce métier demande beaucoup d’intéractions en interne comme en externe !\" ';
                $scope.role_plus = 'Le rapport humain';
                $scope.role_moins = 'L’importance du timing dans la recherche de pépite';
                $scope.gratifiante = 'La signature finale';
                $scope.ingrate = 'Dépendre des consultants recruteurs pour la suite du process de recrutement';
                $scope.ccl = 'En bref, une superbe expérience et un regard neuf sur le métier de recruteur !';
                $scope.video = 'https://www.youtube.com/embed/y0cFgueZPJU?rel=0';
                $scope.video_twitter = "http://twitter.com/intent/tweet/?url=http://bit.ly/XebianVMV-DirRecrutement&list=PL-Wbj9VN8zDSHojMLxdpDSpMBojN81B48&hashtags=XebianVMV&via=XebiaFr";
                $scope.video_google = "https://plus.google.com/share?url=https://bit.ly/XebianVMV-DirRecrutement";
                $scope.video_linkedin = "https://www.linkedin.com/cws/share?url=https://bit.ly/XebianVMV-DirRecrutement";
                $scope.blog_article = "http://blog.xebia.fr/2015/09/15/vis-ma-vie-episode-4-jeremy-directeur-recrutement-dun-jour";
            }

             else if (id == 'Dir. Marketing') {
                 $scope.name = 'anne';
                 $scope.sourceImgBg = 'img/bg_marketing_black.png';
                 $scope.sourceImgBgMini = 'img/bg_marketing_560.png';
                 $scope.phraseConsulte = 'Du violet du violet ... Je veux du violet partout !';
                 $scope.nomConsulte = 'Anne Beauchart, Directrice Marketing';
                 $scope.expert = 'L’EXPERTE';
                 $scope.apprenti = 'L’APPRENTIE';
                 $scope.phraseConsultant = 'C’est easy !';
                 $scope.nomConsultant = 'Sameh Ben Fredj, Consultante';
                 $scope.rond1 = 'img/sameh_ben_fredj.png';
                 $scope.quote1 = 'Cette journée m’a permise d’avoir une meilleure compréhension du métier de Directrice Marketing. Je me disais «C’est easy !» mais en réalité, j’en ai eu plein les yeux ! C’est une expérience intense et riche. La Directrice Marketing est les yeux, les oreilles et la bouche de Xebia. Elle est partout pour représenter la boîte et en faire parler. Sa journée est un vrai marathon. Elle touche à tout : rédaction, web, événementiel, tout en gérant le budget et des deadlines très serrées. Chapeau bas !';
                 $scope.role_plus = 'Le côté touche à tout et être partout';
                 $scope.role_moins = 'L’écriture, la mise en page et la publication des billets de blog';
                 $scope.gratifiante = 'Le fait que Xebia soit visible partout !';
                 $scope.ingrate = 'L’investissement passé sur les TechTrends, nos livres blancs !';
                 $scope.ccl = 'En conclusion : Finalement « le market, c’est pas du tout easy ! » et être Directrice Marketing d’un jour m’aura suffit ! :-)'
                 $scope.video = 'https://www.youtube.com/embed/gGGOJzL5Vhg?rel=0';
                 $scope.video_twitter = "http://twitter.com/intent/tweet/?url=https://bit.ly/XebianVMV-DirMarketing&hashtags=XebianVMV&via=XebiaFr";
                 $scope.video_google = "https://plus.google.com/share?url=https://bit.ly/XebianVMV-DirMarketing";
                 $scope.video_linkedin = "https://www.linkedin.com/cws/share?url=https://bit.ly/XebianVMV-DirMarketing";
                 $scope.blog_article = "http://blog.xebia.fr/2015/09/22/vis-ma-vie-episode-5-sameh-directrice-marketing-dun-jour";
             }


             else if (id == 'COO') {
                 $scope.name = 'christophe';
                 $scope.sourceImgBg = 'img/bg_coo.png';
                 $scope.sourceImgBgMini = 'img/bg_coo_560.png';
                 $scope.phraseConsulte = 'Délégation idoine';
                 $scope.nomConsulte = 'Christophe Heubes, COO';
                 $scope.phraseConsultant = 'Moi aussi j’ai cherché dans le dico...';
                 $scope.expert = 'L’EXPERT';
                 $scope.apprenti = 'L’APPRENTI';
                 $scope.nomConsultant = 'Jéremie Martinez, Consultant';
                 $scope.rond1 = 'img/jeremie_martinez.png';
                 $scope.quote1 = 'Ça commence tôt, ça finit tard et entre les deux ça n’arrête pas ! Un planning chargé, des interruptions nombreuses, des tâches pas toujours sympas mais au final la sensation d’avoir un vrai impact sur la vie et les personnes de la société. COO est un poste un peu caché mais qui est indispensable chez Xebia. Aucune journée ne ressemble à la précédente et il faut pouvoir se rendre disponible rapidement et à tout moment. Le COO est un peu le chef d’orchestre de Xebia.';
                 $scope.role_plus = 'Le fait d’avoir une vue d’ensemble de l’entreprise.';
                 $scope.role_moins = 'Les relectures de documents juridiques.';
                 $scope.gratifiante = 'Le fait que l’entreprise tourne et réussisse.';
                 $scope.ingrate = 'La gestion des petits problèmes logistiques non visible : Imprimante, DD, réseaux, etc.';
                 $scope.ccl = 'En conclusion : Délégation idoine, avec autant de choses différentes à faire et une TODO longue comme deux bras, je comprends mieux. En tout cas, c’est pas pour moi !';
                 $scope.video = 'https://www.youtube.com/embed/UXm54jMq6TI';
                 $scope.video_twitter = "http://twitter.com/intent/tweet/?url=http://bit.ly/1L4eKTB&hashtags=XebianVMV&via=XebiaFr";
                 $scope.video_google = "https://plus.google.com/share?url=https://www.youtube.com/watch?v=UXm54jMq6TI&list=PL-Wbj9VN8zDSHojMLxdpDSpMBojN81B48";
                 $scope.video_linkedin = "https://www.linkedin.com/cws/share?url=https://www.youtube.com/watch?v=UXm54jMq6TI&list=PL-Wbj9VN8zDSHojMLxdpDSpMBojN81B48";
                 $scope.blog_article = "http://blog.xebia.fr/2015/10/06/vis-ma-vie-episode-7-jeremie-coo-dun-jour/";
             }

            // else if (id == 'Consultant Manager') {
            //     $scope.name = 'jean-louis';
            //     $scope.sourceImgBg = 'img/bg_manager.png';
            //     $scope.sourceImgBgMini = 'img/bg_manager_560.png';
            //     $scope.phraseConsulte = 'I manage, you manage, he manages';
            //     $scope.nomConsulte = 'Jean-Louis Rigau, Manager';
            //     $scope.phraseConsultant = 'Je veux manager ! ';
            //     $scope.expert = 'L’EXPERT';
            //     $scope.apprenti = 'L’APPRENTI';
            //     $scope.nomConsultant = 'Antoine Michaud, Consultant';
            //     $scope.rond1 = 'img/antoine_michaud.png';
            //     $scope.quote1 = 'Manager un jour, manager pour toujours !';
            //     $scope.role_plus = 'La variété des responsabilités / tâches.';
            //     $scope.role_moins = 'La température ( pas celle de mon CTO, celle de l’air ;) )';
            //     $scope.gratifiante = 'La force de proposition / décision du CTO quant au choix des missions qui pourraient intéresser les Xebians.';
            //     $scope.ingrate = 'Les relances par mail.';
            //     $scope.ccl = 'En conclusion : C’est pas moi le patron, et c’est très bien comme ça !'
            //     $scope.video = 'https://www.youtube.com/embed/2twefLKkW0o';
            //     $scope.video_twitter = "http://twitter.com/intent/tweet/?url=https://www.youtube.com/watch?v=D3OXULlXFi0&index=1&list=PL-Wbj9VN8zDSHojMLxdpDSpMBojN81B48&hashtags=XebianVMV&via=XebiaFr";
            //     $scope.video_google = "https://plus.google.com/share?url=https://www.youtube.com/watch?v=D3OXULlXFi0&index=1&list=PL-Wbj9VN8zDSHojMLxdpDSpMBojN81B48";
            //     $scope.video_linkedin = "https://www.linkedin.com/cws/share?url=https://www.youtube.com/watch?v=D3OXULlXFi0&index=1&list=PL-Wbj9VN8zDSHojMLxdpDSpMBojN81B48";
            //     $scope.blog_article = "http://blog.xebia.fr";
            // }

            // else if (id == 'Dir. Commerciale') {
            //     $scope.name = 'estelle';
            //     $scope.sourceImgBg = 'img/bg_commerce.png';
            //     $scope.sourceImgBgMini = 'img/bg_commerce_560.png';
            //     $scope.phraseConsulte = 'Daf punk';
            //     $scope.nomConsulte = 'Estelle Boyer, Directrice Commerciale';
            //     $scope.phraseConsultant = 'Choucroute garnie c"est la vie !';
            //     $scope.expert = 'L’EXPERTE';
            //     $scope.apprenti = 'L’APPRENTI';
            //     $scope.nomConsultant = 'Benjamin Lacroix, Consultant';
            //     $scope.rond1 = 'img/benjamin_lacroix.png';
            //     $scope.quote1 = 'Journée de ouf ! Je kiff négocier chez le client ! Je fais faire une reconversion !';
            //     $scope.role_plus = 'La variété des responsabilités / tâches.';
            //     $scope.role_moins = 'La température ( pas celle de mon CTO, celle de l’air ;) )';
            //     $scope.gratifiante = 'La force de proposition / décision du CTO quant au choix des missions qui pourraient intéresser les Xebians.';
            //     $scope.ingrate = 'Les relances par mail.';
            //     $scope.ccl = 'En conclusion : C’est pas moi le patron, et c’est très bien comme ça !'
            //     $scope.video = 'https://www.youtube.com/embed/2twefLKkW0o';
            //     $scope.video_twitter = "http://twitter.com/intent/tweet/?url=https://www.youtube.com/watch?v=D3OXULlXFi0&index=1&list=PL-Wbj9VN8zDSHojMLxdpDSpMBojN81B48&hashtags=XebianVMV&via=XebiaFr";
            //     $scope.video_google = "https://plus.google.com/share?url=https://www.youtube.com/watch?v=D3OXULlXFi0&index=1&list=PL-Wbj9VN8zDSHojMLxdpDSpMBojN81B48";
            //     $scope.video_linkedin = "https://www.linkedin.com/cws/share?url=https://www.youtube.com/watch?v=D3OXULlXFi0&index=1&list=PL-Wbj9VN8zDSHojMLxdpDSpMBojN81B48";
            //     $scope.blog_article = "http://blog.xebia.fr";
            // }

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
                 $scope.quote1 = 'Le quotidien de DAF, c’est un savant mélange entre financier, juridique et social. C’est être un organe vital de l’entreprise qui s’assure de son équilibre et de son bien être. Jamais je n’aurais pu imaginer qu’il faille assurer autant de tâches avec une marge d’erreur minime si ce n’est inexistante.';
                 $scope.role_plus = 'Le côté central et indispensable du poste.';
                 $scope.role_moins = 'Subir les joies des lois, des taxes, etc. ; je n’aurais jamais imaginé à quel point il est dur de faire vivre une entreprise.';
                 $scope.gratifiante = 'Etre un organe vital de l’entreprise !';
                 $scope.ingrate = 'Préparer des documents complexes et sans forcément en voir l’intérêt (ex: fiches des produits nettoyants utilisés)';
                 $scope.ccl = 'En conclusion : Bref, je crois qu’on peut le dire ; être DAF, c’est punk !'
                 $scope.video = 'https://www.youtube.com/embed/os54MbZA_18';
                 $scope.video_twitter = "http://twitter.com/intent/tweet/?url=https://bit.ly/XebianVMV-DAF&hashtags=XebianVMV&via=XebiaFr";
                 $scope.video_google = "https://plus.google.com/share?url=https://bit.ly/XebianVMV-DAF";
                 $scope.video_linkedin = "https://www.linkedin.com/cws/share?url=https://bit.ly/XebianVMV-DAF";
                 $scope.blog_article = "http://blog.xebia.fr/2015/09/29/vis-ma-vie-episode-6-clement-daf-dun-jour";
             }

            else{
                $location.path('/').replace();
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