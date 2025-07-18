pipeline {
    agent any
         stages {
	    stage('Build') {
	        agent {
	            docker { image 'node:16-alpine' }
	        }
	        steps {
	            echo 'Testing the application'
	            sh 'node --version'
		    sh 'echo "Artifact" > hello.txt'
	        }
	    }
	    stage('Archive') {
		 steps {
	            sh 'ls'
		    archiveArtifacts(artifacts: '**/*.txt', followSymlinks: false)
		 }
            }
	 }
}
