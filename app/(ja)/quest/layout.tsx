import QuestProvider from '@/components/quest/QuestProvider';
import QuestShell from '@/components/quest/QuestShell';
import {questFish,questMethods} from '@/lib/quest/catalog';
export default function Layout({children}:{children:React.ReactNode}){return <QuestProvider fish={questFish} methods={questMethods}><QuestShell>{children}</QuestShell></QuestProvider>}
