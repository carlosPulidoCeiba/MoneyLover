pipeline {
    agent any

     triggers {
        pollSCM('* * * * *')
    }

    stages {

        stage('Checkout'){
            steps{
                echo "------------>Checkout<------------"
                checkout([
                    $class: 'GitSCM', 
                    branches: [[name: '*/master']], 
                    doGenerateSubmoduleConfigurations: false, 
                    extensions: [], 
                    gitTool: 'Default', 
                    submoduleCfg: [], 
                    userRemoteConfigs: [[
                        credentialsId: 'GitHub_carlos.pulido', 
                        url:'https://github.com/carlosPulidoCeiba/MoneyLover'
                    ]]
                ])
            }
        }

        stage('Install') {
            steps {
                sh 'npm install'
            }
        }

         stage('Tests') {
            steps {
                sh 'npm run test'
            }
        }


        stage('Sonar Scanner Coverage') {
            steps{
                echo '------------>Análisis de código estático<------------'
                withSonarQubeEnv('Sonar') {
                    sh "${tool name: 'SonarScanner', type:'hudson.plugins.sonar.SonarRunnerInstallation'}/bin/sonar-scanner" 
                }
            }
        }

        stage('Build'){
            steps {
                sh 'ng build --prod '
            }
        }
    }

    post{
        always {
            echo 'This will always run'
        }
        success {
            echo 'This will run only if successful'
        }
        failure {
            echo 'This will run only if failed'
            mail (to: 'carlos.pulido@ceiba.com.co', subject: "Failed Pipeline:${currentBuild.fullDisplayName}",body: "Something is wrong with ${env.BUILD_URL}") 
        }
    }
}