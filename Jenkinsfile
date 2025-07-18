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
	            archiveArtifacts(artifacts: '**/*.txt', followSymlinks: false)
	        }
	    }
	    stage('Archive') {
		 steps {
	            sh 'ls'
		 }
            }
	 }
}
