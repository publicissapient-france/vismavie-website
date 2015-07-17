'use strict';

angular.module('app')
    .controller('DetailsCtrl', ['$scope', '$location', function ($scope, $location) {

        var id = $location.search().id;

        $scope.changeData = function(id) {
            if (id == 1) {
                $scope.name = 'pablo';
                $scope.sourceImgBg = 'img/bg_cto.png';
                $scope.phraseConsulte = 'I am the CTO bitch !';
                $scope.nomConsulte = 'Pablo Lopez, CTO';
                $scope.phraseConsultant = '50 kilos tout mouillé';
                $scope.nomConsultant = 'Alexandre Hebert, Consultant';
                $scope.rond1 = 'img/alexandre_hebert.png';
                $scope.quote1 = 'Une expérience très enrichisante, à refaire dès que possible, j’ai beaucoup appris sur le role du CTO. Je ne sais pas comment il fait pour faire tant de chose, Pablo est GE-NIAL et HY-PER ACTIF...';
                $scope.plus1 = 'Plus';
                $scope.plus2 = 'Plus';
                $scope.plus3 = 'Plus';
                $scope.moins1 = 'Moins';
                $scope.moins2 = 'Moins';
                $scope.moins3 = 'Moins';
                document.getElementById('video').src = 'https://www.youtube.com/embed/2twefLKkW0o';
            }

            else if (id == 2) {
                $scope.name = 'luc';
                $scope.sourceImgBg = 'img/bg_ceo.png';
                $scope.phraseConsulte = 'I am the CEO bitch !';
                $scope.nomConsulte = 'Luc Legardeur, CEO';
                $scope.phraseConsultant = 'Calif a la place du calif';
                $scope.nomConsultant = 'Laurène Vol, Consultante';
                $scope.rond1 = 'img/laurene_vol.png';
                $scope.quote1 = 'Journée enrichissante, passionante, beaucoup de moment clés. Participation à un comité de direction : très instructif';
                $scope.plus1 = 'Plus';
                $scope.plus2 = 'Plus';
                $scope.plus3 = 'Plus';
                $scope.moins1 = 'Moins';
                $scope.moins2 = 'Moins';
                $scope.moins3 = 'Moins';
                document.getElementById('video').src = 'https://www.youtube.com/embed/2twefLKkW0o';

            }

            else if (id == 3) {
                $scope.name = 'anne';
                $scope.sourceImgBg = 'img/bg_marketing.png';
                $scope.phraseConsulte = 'Market Queen';
                $scope.nomConsulte = 'Anne Beauchart, Directrice Marketing';
                $scope.phraseConsultant = 'Marketing KESAKO ';
                $scope.nomConsultant = 'Sameh Ben Fredj, Consultante';
                $scope.rond1 = 'img/sameh_ben_fredj.png';
                $scope.quote1 = 'Le marketing, maintenant JE CONNAIS !';
                $scope.plus1 = 'Plus';
                $scope.plus2 = 'Plus';
                $scope.plus3 = 'Plus';
                $scope.moins1 = 'Moins';
                $scope.moins2 = 'Moins';
                $scope.moins3 = 'Moins';
                document.getElementById('video').src = 'https://www.youtube.com/embed/2twefLKkW0o';

            }

            else if (id == 4) {
                $scope.name = 'laetitia';
                $scope.sourceImgBg = 'img/bg_recrutement.png';
                $scope.phraseConsulte = 'Une chasseuse sachant chasser…';
                $scope.nomConsulte = 'Laetitia, Directrice du recrutement';
                $scope.phraseConsultant = 'Coucou, tu veux voir Magritte ?';
                $scope.nomConsultant = 'Jeremy Vinai, Consultant';
                $scope.rond1 = 'img/jeremy_vinai.png';
                $scope.quote1 = 'Je sais chasser tel un chasseur le dimanche matin dans sa campagne profonde... Mais attention au grand méchant loup qui rôde dans les bois.';
                $scope.plus1 = 'Plus';
                $scope.plus2 = 'Plus';
                $scope.plus3 = 'Plus';
                $scope.moins1 = 'Moins';
                $scope.moins2 = 'Moins';
                $scope.moins3 = 'Moins';
                document.getElementById('video').src = 'https://www.youtube.com/embed/2twefLKkW0o';

            }

            else if (id == 5) {
                $scope.name = 'christophe';
                $scope.sourceImgBg = 'img/bg_coo.png';
                $scope.phraseConsulte = 'I am the COO bitch !';
                $scope.nomConsulte = 'Christophe Heubes, COO';
                $scope.phraseConsultant = 'Opérations TEKNIKE';
                $scope.nomConsultant = 'Jéremie Martinez, Consultant';
                $scope.rond1 = 'img/jeremie_martinez.png';
                $scope.quote1 = 'Maintenant, je mène à bien toutes les opérations !';
                $scope.plus1 = 'Plus';
                $scope.plus2 = 'Plus';
                $scope.plus3 = 'Plus';
                $scope.moins1 = 'Moins';
                $scope.moins2 = 'Moins';
                $scope.moins3 = 'Moins';
                document.getElementById('video').src = 'https://www.youtube.com/embed/2twefLKkW0o';

            }

            else if (id == 6) {
                $scope.name = 'jean-louis';
                $scope.sourceImgBg = 'img/bg_manager.png';
                $scope.phraseConsulte = 'I manage, you manage, he manages';
                $scope.nomConsulte = 'Jean-Louis Rigau, Manager';
                $scope.phraseConsultant = 'Je veux manager ! ';
                $scope.nomConsultant = 'Antoine Michaud, Consultant';
                $scope.rond1 = 'img/antoine_michaud.png';
                $scope.quote1 = 'Manager un jour, manager pour toujours !';
                $scope.plus1 = 'Plus';
                $scope.plus2 = 'Plus';
                $scope.plus3 = 'Plus';
                $scope.moins1 = 'Moins';
                $scope.moins2 = 'Moins';
                $scope.moins3 = 'Moins';
                document.getElementById('video').src = 'https://www.youtube.com/embed/2twefLKkW0o';

            }

            else if (id == 7) {
                $scope.name = 'estelle';
                $scope.sourceImgBg = 'img/bg_commerce.png';
                $scope.phraseConsulte = 'Direction chez le client';
                $scope.nomConsulte = 'Estelle Boyer, Directrice Commerciale';
                $scope.phraseConsultant = 'Choucroute garnie c"est la vie !';
                $scope.nomConsultant = 'Benjamin Lacroix, Consultant';
                $scope.rond1 = 'img/benjamin_lacroix.png';
                $scope.quote1 = 'Journée de ouf ! Je kiff négocier chez le client ! Je fais faire une reconversion !';
                $scope.plus1 = 'Plus';
                $scope.plus2 = 'Plus';
                $scope.plus3 = 'Plus';
                $scope.moins1 = 'Moins';
                $scope.moins2 = 'Moins';
                $scope.moins3 = 'Moins';
                document.getElementById('video').src = 'https://www.youtube.com/embed/2twefLKkW0o';

            }

            else if (id == 8) {
                $scope.name = 'nadia';
                $scope.sourceImgBg = 'img/bg_daf.png';
                $scope.phraseConsulte = 'Pas de justif pas de fric !';
                $scope.nomConsulte = 'Nadia Sidhoum, DAF';
                $scope.phraseConsultant = 'DAFicionado !';
                $scope.nomConsultant = 'Clément Heliou, Consultant';
                $scope.rond1 = 'img/clement_heliou.png';
                $scope.quote1 = 'Justification, fric, pognon, chic ! La DAF une fonction, un métier, une passion, être dévoué !';
                $scope.plus1 = 'Plus';
                $scope.plus2 = 'Plus';
                $scope.plus3 = 'Plus';
                $scope.moins1 = 'Moins';
                $scope.moins2 = 'Moins';
                $scope.moins3 = 'Moins';
                document.getElementById('video').src = 'https://www.youtube.com/embed/2twefLKkW0o';

            }

            else if (id == 9) {
                $scope.name = 'thibaud';
                $scope.sourceImgBg = 'img/bg_studio.png';
                $scope.phraseConsulte = 'Studio, Studia, Studiès';
                $scope.nomConsulte = 'Thibaud Cavin, Responsable Studio';
                $scope.phraseConsultant = 'A grand, grand et demi ?';
                $scope.nomConsultant = 'Emmanuel Sciara, Coach Agile';
                $scope.rond1 = 'img/emmanuel_sciara.png';
                $scope.quote1 = 'Beaucoup de responsabilité, placement des consultant selon leur humeur, envie, très difficile, RESPECT MAN !';
                $scope.plus1 = 'Plus';
                $scope.plus2 = 'Plus';
                $scope.plus3 = 'Plus';
                $scope.moins1 = 'Moins';
                $scope.moins2 = 'Moins';
                $scope.moins3 = 'Moins';
                document.getElementById('video').src = 'https://www.youtube.com/embed/2twefLKkW0o';

            }

        }

        $scope.changeData(id);

        $scope.gotoConcept = function() {

            $location.hash('concept');
            $anchorScroll();
        };


    }]);