pipeline {
    
    agent any 
 
    stages {
 
        stage('Pull Code') {
            steps {
                checkout scm
            }
        }
 
        stage('build') {
          steps {
              echo 'build the application...'
          }
        }
 
        stage('test') {
          steps {
              echo 'test the application...'
          }
        }
 
        stage('deploy') {
            steps {
              echo 'deploy the application'
            }
        }
    }
}
