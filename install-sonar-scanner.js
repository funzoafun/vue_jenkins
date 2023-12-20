const { execSync } = require('child_process');
const { platform } = require('os');

const osType = platform();

try {
  if (osType === 'darwin') {
    // macOS-specific installation
    execSync('brew install sonar-scanner');
  } else if (osType === 'linux') {
    // Linux-specific installation
    execSync('sudo apt-key adv --keyserver hkp://keyserver.ubuntu.com:80 --recv-keys 379CE192D401AB61');
    execSync('echo "deb https://dl.bintray.com/sonarsource/SonarQube org/repo1bintray" | sudo tee -a /etc/apt/sources.list.d/sonarqube.list');
    execSync('sudo apt-get update && sudo apt-get install -y sonar-scanner');
  } else {
    console.warn(`Unsupported operating system: ${osType}. Sonar Scanner not installed.`);
  }
} catch (error) {
  console.error('Error installing Sonar Scanner:', error.message);
  process.exit(1);
}
