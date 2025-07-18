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
	            docker { image 'grafana/k6' }
	        }
	        steps {
		    echo '---- Running LOAD TEST ----'
		    sh 'k6 run test.js'
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
