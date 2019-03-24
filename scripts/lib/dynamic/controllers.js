var ktkApp = angular.module('ktkApp',[]);

ktkApp.controller('ktkController', function($scope){
	
	var projects = [
		{
			'projID':0,
			'projName':'Behind Closed Doors: Exploring Contemporary Relationships',
			'projDesc':'Director',
			'projFolderPath':'assets/portfolio_projects/',
			'thumbNails':[
							{'fileName': 'assets/portfolio_projects/behind_closed_doors/1.jpg', 'title':'Title #1','desc':'Desc 1'},
							{'fileName': 'assets/portfolio_projects/behind_closed_doors/2.jpg', 'title':'Title #2','desc':'Desc 2'},
							{'fileName': 'assets/portfolio_projects/behind_closed_doors/3.jpg', 'title':'Title #3','desc':'Desc 3'},
							{'fileName': 'assets/portfolio_projects/behind_closed_doors/4.jpg', 'title':'Title #4','desc':'Desc 4'},
							{'fileName': 'assets/portfolio_projects/behind_closed_doors/5.jpg', 'title':'Title #5','desc':'Desc 5'},							
							{'fileName': 'assets/portfolio_projects/behind_closed_doors/6.jpg', 'title':'Title #6','desc':'Desc 6'},
							{'fileName': 'assets/portfolio_projects/behind_closed_doors/7.jpg', 'title':'Title #7','desc':'Desc 7'},
							{'fileName': 'assets/portfolio_projects/behind_closed_doors/8.jpg', 'title':'Title #8','desc':'Desc 8'},
							{'fileName': 'assets/portfolio_projects/behind_closed_doors/9.jpg', 'title':'Title #9','desc':'Desc 9'}					
						 ]			
		},		
		{
			'projID':1,
			'projName':'The Wedding Singer',
			'projDesc':'Choreographer',
			'projFolderPath':'assets/portfolio_projects/',
			'thumbNails':[
							{'fileName': 'assets/portfolio_projects/the_wedding_singer/1.jpg', 'title':'Title #1','desc':'Desc 1'},
							{'fileName': 'assets/portfolio_projects/the_wedding_singer/2.jpg', 'title':'Title #2','desc':'Desc 2'},
							{'fileName': 'assets/portfolio_projects/the_wedding_singer/3.jpg', 'title':'Title #3','desc':'Desc 3'},
							{'fileName': 'assets/portfolio_projects/the_wedding_singer/4.jpg', 'title':'Title #4','desc':'Desc 4'},
							{'fileName': 'assets/portfolio_projects/the_wedding_singer/5.jpg', 'title':'Title #5','desc':'Desc 5'},
							{'fileName': 'assets/portfolio_projects/the_wedding_singer/6.jpg', 'title':'Title #6','desc':'Desc 6'}							
						 ]			
		},
		{
			'projID':2,
			'projName':'Broadway Musical Revue',
			'projDesc':'Director and Choreographer',
			'projFolderPath':'assets/portfolio_projects/',
			'thumbNails':[
							{'fileName': 'assets/portfolio_projects/broadway_musical_revue/1.jpg', 'title':'Title #1','desc':'Desc 1'},
							{'fileName': 'assets/portfolio_projects/broadway_musical_revue/2.jpg', 'title':'Title #2','desc':'Desc 2'},
							{'fileName': 'assets/portfolio_projects/broadway_musical_revue/3.jpg', 'title':'Title #3','desc':'Desc 3'},
							{'fileName': 'assets/portfolio_projects/broadway_musical_revue/4.jpg', 'title':'Title #4','desc':'Desc 4'},
							{'fileName': 'assets/portfolio_projects/broadway_musical_revue/5.jpg', 'title':'Title #5','desc':'Desc 5'},
							{'fileName': 'assets/portfolio_projects/broadway_musical_revue/6.jpg', 'title':'Title #6','desc':'Desc 6'}							
						 ]			
		},
		{
			'projID':3,
			'projName':'Drowsy Chaperone',
			'projDesc':'Choreographer',
			'projFolderPath':'assets/portfolio_projects/',
			'thumbNails':[
							{'fileName': 'assets/portfolio_projects/drowsy_chaperone/1.jpg', 'title':'Title #1','desc':'Desc 1'},
							{'fileName': 'assets/portfolio_projects/drowsy_chaperone/2.jpg', 'title':'Title #2','desc':'Desc 2'},
							{'fileName': 'assets/portfolio_projects/drowsy_chaperone/3.jpg', 'title':'Title #3','desc':'Desc 3'},
							{'fileName': 'assets/portfolio_projects/drowsy_chaperone/4.jpg', 'title':'Title #4','desc':'Desc 4'},
							{'fileName': 'assets/portfolio_projects/drowsy_chaperone/5.jpg', 'title':'Title #5','desc':'Desc 5'},
							{'fileName': 'assets/portfolio_projects/drowsy_chaperone/6.jpg', 'title':'Title #6','desc':'Desc 6'}
						 ]			
		},
		{
			'projID':4,
			'projName':'Seussical Jr.',
			'projDesc':'Director and Choreographer',
			'projFolderPath':'assets/portfolio_projects/',
			'thumbNails':[
							{'fileName': 'assets/portfolio_projects/seussical_jr/1.jpg', 'title':'Title #1','desc':'Desc 1'},
							{'fileName': 'assets/portfolio_projects/seussical_jr/2.jpg', 'title':'Title #2','desc':'Desc 2'},
							{'fileName': 'assets/portfolio_projects/seussical_jr/3.jpg', 'title':'Title #3','desc':'Desc 3'},
							{'fileName': 'assets/portfolio_projects/seussical_jr/4.jpg', 'title':'Title #4','desc':'Desc 4'},
							{'fileName': 'assets/portfolio_projects/seussical_jr/5.jpg', 'title':'Title #5','desc':'Desc 5'},
							{'fileName': 'assets/portfolio_projects/seussical_jr/6.jpg', 'title':'Title #6','desc':'Desc 6'},							
							{'fileName': 'assets/portfolio_projects/seussical_jr/7.jpg', 'title':'Title #7','desc':'Desc 7'},
							{'fileName': 'assets/portfolio_projects/seussical_jr/8.jpg', 'title':'Title #8','desc':'Desc 8'},
							{'fileName': 'assets/portfolio_projects/seussical_jr/9.jpg', 'title':'Title #9','desc':'Desc 9'}
						 ]			
		},		
		{
			'projID':5,
			'projName':'Wonderful Town',
			'projDesc':'Director and Choreographer',
			'projFolderPath':'assets/portfolio_projects/',
			'thumbNails':[
							{'fileName': 'assets/portfolio_projects/wonderful_town/1.jpg', 'title':'Title #1','desc':'Desc 1'},
							{'fileName': 'assets/portfolio_projects/wonderful_town/2.jpg', 'title':'Title #2','desc':'Desc 2'},
							{'fileName': 'assets/portfolio_projects/wonderful_town/3.jpg', 'title':'Title #3','desc':'Desc 3'},
							{'fileName': 'assets/portfolio_projects/wonderful_town/4.jpg', 'title':'Title #4','desc':'Desc 4'},
							{'fileName': 'assets/portfolio_projects/wonderful_town/5.jpg', 'title':'Title #5','desc':'Desc 5'},
							{'fileName': 'assets/portfolio_projects/wonderful_town/6.jpg', 'title':'Title #6','desc':'Desc 6'},							
							{'fileName': 'assets/portfolio_projects/wonderful_town/7.jpg', 'title':'Title #7','desc':'Desc 7'},
							{'fileName': 'assets/portfolio_projects/wonderful_town/8.jpg', 'title':'Title #8','desc':'Desc 8'},
							{'fileName': 'assets/portfolio_projects/wonderful_town/9.jpg', 'title':'Title #9','desc':'Desc 9'}					
						 ]			
		},
		{
			'projID':6,
			'projName':'Anything Goes',
			'projDesc':'Choreographer',
			'projFolderPath':'assets/portfolio_projects/',
			'thumbNails':[
							{'fileName': 'assets/portfolio_projects/anything_goes/1.jpg', 'title':'Title #1','desc':'Desc 1'},
							{'fileName': 'assets/portfolio_projects/anything_goes/2.jpg', 'title':'Title #2','desc':'Desc 2'},
							{'fileName': 'assets/portfolio_projects/anything_goes/3.jpg', 'title':'Title #3','desc':'Desc 3'},
							{'fileName': 'assets/portfolio_projects/anything_goes/4.jpg', 'title':'Title #4','desc':'Desc 4'},
							{'fileName': 'assets/portfolio_projects/anything_goes/5.jpg', 'title':'Title #5','desc':'Desc 5'},
							{'fileName': 'assets/portfolio_projects/anything_goes/6.jpg', 'title':'Title #6','desc':'Desc 6'}
						 ]			
		},
		{
			'projID':7,
			'projName':'Acting Up Camp Junior Shows',
			'projDesc':'Director and Choreographer',
			'projFolderPath':'assets/portfolio_projects/',
			'thumbNails':[
							{'fileName': 'assets/portfolio_projects/acting_up_camp_junior_shows/1.jpg', 'title':'Title #1','desc':'Desc 1'},
							{'fileName': 'assets/portfolio_projects/acting_up_camp_junior_shows/2.jpg', 'title':'Title #2','desc':'Desc 2'},
							{'fileName': 'assets/portfolio_projects/acting_up_camp_junior_shows/3.jpg', 'title':'Title #3','desc':'Desc 3'},
							{'fileName': 'assets/portfolio_projects/acting_up_camp_junior_shows/4.jpg', 'title':'Title #4','desc':'Desc 4'},
							{'fileName': 'assets/portfolio_projects/acting_up_camp_junior_shows/5.jpg', 'title':'Title #5','desc':'Desc 5'},
							{'fileName': 'assets/portfolio_projects/acting_up_camp_junior_shows/6.jpg', 'title':'Title #6','desc':'Desc 6'},							
							{'fileName': 'assets/portfolio_projects/acting_up_camp_junior_shows/7.jpg', 'title':'Title #7','desc':'Desc 7'},
							{'fileName': 'assets/portfolio_projects/acting_up_camp_junior_shows/8.jpg', 'title':'Title #8','desc':'Desc 8'},
							{'fileName': 'assets/portfolio_projects/acting_up_camp_junior_shows/9.jpg', 'title':'Title #9','desc':'Desc 9'}						
						 ]			
		}		
	];
				
	$scope.ShowPortfolioProject = function(projectID){
		$scope.Project = projects[projectID];
		$('#portfolioModal').modal('show');	
			
		var s = document.createElement('script');
		s.src = "scripts/lib/galleriffic/galleriffic_loader.js";
		document.body.appendChild(s);
	}
	
	$scope.ShowPicOnHover = function(projectID){
		//this.style.background-image= '../' + projects[projectID].thumbNails[0].fileName;
		$scope.testUrl = '../' + projects[projectID].thumbNails[0].fileName;
		//alert('../' + projects[projectID].thumbNails[0].fileName);
	}
	
});