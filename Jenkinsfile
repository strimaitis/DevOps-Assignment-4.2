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
		steps {
		    sh 'echo "Artifact" > artifact.txt'
		}
	    }
         }

	post {
        always {
            archiveArtifacts(artifacts: '**/*.txt', followSymlinks: false)
        }
    }
}
