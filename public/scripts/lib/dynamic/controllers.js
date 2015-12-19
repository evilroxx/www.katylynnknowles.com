var ktkApp = angular.module('ktkApp',[]);

ktkApp.controller('ktkController', function($scope){
	
	var projects = [
		{
			'projID':0,
			'projName':'Behind Closed Doors: Exploring Contemporary Relationships',
			'projDesc':'Director',
			'projFolderPath':'Assets/Portfolio Projects/',
			'thumbNails':[
							{'fileName': 'assets/Portfolio Projects/Behind Closed Doors/1.jpg', 'title':'Title #1','desc':'Desc 1'},
							{'fileName': 'assets/Portfolio Projects/Behind Closed Doors/2.jpg', 'title':'Title #2','desc':'Desc 2'},
							{'fileName': 'assets/Portfolio Projects/Behind Closed Doors/3.jpg', 'title':'Title #3','desc':'Desc 3'},
							{'fileName': 'assets/Portfolio Projects/Behind Closed Doors/4.jpg', 'title':'Title #4','desc':'Desc 4'},
							{'fileName': 'assets/Portfolio Projects/Behind Closed Doors/5.jpg', 'title':'Title #5','desc':'Desc 5'},							
							{'fileName': 'assets/Portfolio Projects/Behind Closed Doors/6.jpg', 'title':'Title #6','desc':'Desc 6'},
							{'fileName': 'assets/Portfolio Projects/Behind Closed Doors/7.jpg', 'title':'Title #7','desc':'Desc 7'},
							{'fileName': 'assets/Portfolio Projects/Behind Closed Doors/8.jpg', 'title':'Title #8','desc':'Desc 8'},
							{'fileName': 'assets/Portfolio Projects/Behind Closed Doors/9.jpg', 'title':'Title #9','desc':'Desc 9'}					
						 ]			
		},		
		{
			'projID':1,
			'projName':'The Wedding Singer',
			'projDesc':'Choreographer',
			'projFolderPath':'Assets/Portfolio Projects/',
			'thumbNails':[
							{'fileName': 'Assets/Portfolio Projects/Wedding Singer/1.jpg', 'title':'Title #1','desc':'Desc 1'},
							{'fileName': 'Assets/Portfolio Projects/Wedding Singer/2.jpg', 'title':'Title #2','desc':'Desc 2'},
							{'fileName': 'Assets/Portfolio Projects/Wedding Singer/3.jpg', 'title':'Title #3','desc':'Desc 3'},
							{'fileName': 'Assets/Portfolio Projects/Wedding Singer/4.jpg', 'title':'Title #4','desc':'Desc 4'},
							{'fileName': 'Assets/Portfolio Projects/Wedding Singer/5.jpg', 'title':'Title #5','desc':'Desc 5'},
							{'fileName': 'Assets/Portfolio Projects/Wedding Singer/6.jpg', 'title':'Title #6','desc':'Desc 6'}							
						 ]			
		},
		{
			'projID':2,
			'projName':'Broadway Musical Revue',
			'projDesc':'Director and Choreographer',
			'projFolderPath':'Assets/Portfolio Projects/',
			'thumbNails':[
							{'fileName': 'Assets/Portfolio Projects/Broadway Musical Revue/1.jpg', 'title':'Title #1','desc':'Desc 1'},
							{'fileName': 'Assets/Portfolio Projects/Broadway Musical Revue/2.jpg', 'title':'Title #2','desc':'Desc 2'},
							{'fileName': 'Assets/Portfolio Projects/Broadway Musical Revue/3.jpg', 'title':'Title #3','desc':'Desc 3'},
							{'fileName': 'Assets/Portfolio Projects/Broadway Musical Revue/4.jpg', 'title':'Title #4','desc':'Desc 4'},
							{'fileName': 'Assets/Portfolio Projects/Broadway Musical Revue/5.jpg', 'title':'Title #5','desc':'Desc 5'},
							{'fileName': 'Assets/Portfolio Projects/Broadway Musical Revue/6.jpg', 'title':'Title #6','desc':'Desc 6'}							
						 ]			
		},
		{
			'projID':3,
			'projName':'Drowsy Chaperone',
			'projDesc':'Choreographer',
			'projFolderPath':'Assets/Portfolio Projects/',
			'thumbNails':[
							{'fileName': 'Assets/Portfolio Projects/Drowsy Chaperone/1.jpg', 'title':'Title #1','desc':'Desc 1'},
							{'fileName': 'Assets/Portfolio Projects/Drowsy Chaperone/2.jpg', 'title':'Title #2','desc':'Desc 2'},
							{'fileName': 'Assets/Portfolio Projects/Drowsy Chaperone/3.jpg', 'title':'Title #3','desc':'Desc 3'},
							{'fileName': 'Assets/Portfolio Projects/Drowsy Chaperone/4.jpg', 'title':'Title #4','desc':'Desc 4'},
							{'fileName': 'Assets/Portfolio Projects/Drowsy Chaperone/5.jpg', 'title':'Title #5','desc':'Desc 5'},
							{'fileName': 'Assets/Portfolio Projects/Drowsy Chaperone/6.jpg', 'title':'Title #6','desc':'Desc 6'}
						 ]			
		},
		{
			'projID':4,
			'projName':'Seussical Jr.',
			'projDesc':'Director and Choreographer',
			'projFolderPath':'Assets/Portfolio Projects/',
			'thumbNails':[
							{'fileName': 'Assets/Portfolio Projects/Seussical Jr/1.jpg', 'title':'Title #1','desc':'Desc 1'},
							{'fileName': 'Assets/Portfolio Projects/Seussical Jr/2.jpg', 'title':'Title #2','desc':'Desc 2'},
							{'fileName': 'Assets/Portfolio Projects/Seussical Jr/3.jpg', 'title':'Title #3','desc':'Desc 3'},
							{'fileName': 'Assets/Portfolio Projects/Seussical Jr/4.jpg', 'title':'Title #4','desc':'Desc 4'},
							{'fileName': 'Assets/Portfolio Projects/Seussical Jr/5.jpg', 'title':'Title #5','desc':'Desc 5'},
							{'fileName': 'Assets/Portfolio Projects/Seussical Jr/6.jpg', 'title':'Title #6','desc':'Desc 6'},							
							{'fileName': 'Assets/Portfolio Projects/Seussical Jr/7.jpg', 'title':'Title #7','desc':'Desc 7'},
							{'fileName': 'Assets/Portfolio Projects/Seussical Jr/8.jpg', 'title':'Title #8','desc':'Desc 8'},
							{'fileName': 'Assets/Portfolio Projects/Seussical Jr/9.jpg', 'title':'Title #9','desc':'Desc 9'}
						 ]			
		},		
		{
			'projID':5,
			'projName':'Wonderful Town',
			'projDesc':'Director and Choreographer',
			'projFolderPath':'Assets/Portfolio Projects/',
			'thumbNails':[
							{'fileName': 'Assets/Portfolio Projects/Wonderful Town/1.jpg', 'title':'Title #1','desc':'Desc 1'},
							{'fileName': 'Assets/Portfolio Projects/Wonderful Town/2.jpg', 'title':'Title #2','desc':'Desc 2'},
							{'fileName': 'Assets/Portfolio Projects/Wonderful Town/3.jpg', 'title':'Title #3','desc':'Desc 3'},
							{'fileName': 'Assets/Portfolio Projects/Wonderful Town/4.jpg', 'title':'Title #4','desc':'Desc 4'},
							{'fileName': 'Assets/Portfolio Projects/Wonderful Town/5.jpg', 'title':'Title #5','desc':'Desc 5'},
							{'fileName': 'Assets/Portfolio Projects/Wonderful Town/6.jpg', 'title':'Title #6','desc':'Desc 6'},							
							{'fileName': 'Assets/Portfolio Projects/Wonderful Town/7.jpg', 'title':'Title #7','desc':'Desc 7'},
							{'fileName': 'Assets/Portfolio Projects/Wonderful Town/8.jpg', 'title':'Title #8','desc':'Desc 8'},
							{'fileName': 'Assets/Portfolio Projects/Wonderful Town/9.jpg', 'title':'Title #9','desc':'Desc 9'}					
						 ]			
		},
		{
			'projID':6,
			'projName':'Anything Goes',
			'projDesc':'Choreographer',
			'projFolderPath':'Assets/Portfolio Projects/',
			'thumbNails':[
							{'fileName': 'Assets/Portfolio Projects/Anything Goes/1.jpg', 'title':'Title #1','desc':'Desc 1'},
							{'fileName': 'Assets/Portfolio Projects/Anything Goes/2.jpg', 'title':'Title #2','desc':'Desc 2'},
							{'fileName': 'Assets/Portfolio Projects/Anything Goes/3.jpg', 'title':'Title #3','desc':'Desc 3'},
							{'fileName': 'Assets/Portfolio Projects/Anything Goes/4.jpg', 'title':'Title #4','desc':'Desc 4'},
							{'fileName': 'Assets/Portfolio Projects/Anything Goes/5.jpg', 'title':'Title #5','desc':'Desc 5'},
							{'fileName': 'Assets/Portfolio Projects/Anything Goes/6.jpg', 'title':'Title #6','desc':'Desc 6'}
						 ]			
		},
		{
			'projID':7,
			'projName':'Acting Up Camp Junior Shows',
			'projDesc':'Director and Choreographer',
			'projFolderPath':'Assets/Portfolio Projects/',
			'thumbNails':[
							{'fileName': 'Assets/Portfolio Projects/Acting Up Camp Junior Shows/1.jpg', 'title':'Title #1','desc':'Desc 1'},
							{'fileName': 'Assets/Portfolio Projects/Acting Up Camp Junior Shows/2.jpg', 'title':'Title #2','desc':'Desc 2'},
							{'fileName': 'Assets/Portfolio Projects/Acting Up Camp Junior Shows/3.jpg', 'title':'Title #3','desc':'Desc 3'},
							{'fileName': 'Assets/Portfolio Projects/Acting Up Camp Junior Shows/4.jpg', 'title':'Title #4','desc':'Desc 4'},
							{'fileName': 'Assets/Portfolio Projects/Acting Up Camp Junior Shows/5.jpg', 'title':'Title #5','desc':'Desc 5'},
							{'fileName': 'Assets/Portfolio Projects/Acting Up Camp Junior Shows/6.jpg', 'title':'Title #6','desc':'Desc 6'},							
							{'fileName': 'Assets/Portfolio Projects/Acting Up Camp Junior Shows/7.jpg', 'title':'Title #7','desc':'Desc 7'},
							{'fileName': 'Assets/Portfolio Projects/Acting Up Camp Junior Shows/8.jpg', 'title':'Title #8','desc':'Desc 8'},
							{'fileName': 'Assets/Portfolio Projects/Acting Up Camp Junior Shows/9.jpg', 'title':'Title #9','desc':'Desc 9'}						
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