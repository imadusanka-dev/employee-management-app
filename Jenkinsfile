pipeline {
    agent any

    stages {
        stage('SCM') {
            steps {
                git branch: 'main', changelog: false, poll: false, url: 'https://github.com/imadusanka-dev/employee-management-app.git'
            }
        }
        stage('Docker build and push') {
            steps {
                script {
                    withDockerRegistry(credentialsId: 'dockerhub_id') {
                        sh "docker build -t imadusanka/employee-management-frontend:1.0 ."
                        sh "docker push imadusanka/employee-management-frontend:1.0"
                    }
                }
            }
        }
    }
}