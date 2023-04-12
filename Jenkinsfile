pipeline {
    
    agent any 
 
    stages {
 
        stage('Pull Code') {
            steps {
                checkout scm
            }
        }
 
        stage('test') {
          steps {
              echo 'testing the application...'
          }
        }
 
        stage('deploy') {
          steps {
              echo 'deploying the application...'
          }
        }
 
//         stage('Deploy') {
            steps {
              echo 'testing the deploy'
            }
//         }
    }
}
