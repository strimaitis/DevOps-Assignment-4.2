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
	    stage('Staging') {
		when {
		    expression {env.GIT_BRANCH == 'origin/staging'}
		}
		steps {
		    echo '---- IN STAGING ----'
		}
	    }
            stage('Load Testing') {
		agent {
	            docker { image 'grafana/k6:master-with-browser' }
	        }
	        steps {
		    echo '---- Running LOAD TEST ----'
		    echo 'TEST'
	        }
	    }
	    stage('Archive') {
		 steps {
	            sh 'echo "Artifact" > hello.txt'
	            archiveArtifacts(artifacts: '**/*.txt', followSymlinks: false)
		 }
            }
	 }
}
