import { SafeAreaView, Text, View } from 'react-native';
import { sampleJobs, sampleSkills } from './data/sampleCv';
import { getCvProgress } from './utils/cvProgress';

export default function App() {
  const progress = getCvProgress(sampleJobs, sampleSkills);
  return (
    <SafeAreaView>
      <View>
        <Text>Mumoxa CV Builder</Text>
        <Text>Progress: {progress}%</Text>
      </View>
    </SafeAreaView>
  );
}
