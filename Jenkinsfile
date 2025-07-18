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
	        }
	    }
         }

	post {
        always {
            archiveArtifacts artifacts: 'target/*.jar', fingerprint: true
        }
    }
}
