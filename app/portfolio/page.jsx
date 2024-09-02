import MainLayout from '@/components/MainLayout'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
//
function Portfolio() {
    return (
        <MainLayout>
            <Tabs defaultValue="music" className="w-fit">
                <TabsList>
                    <TabsTrigger value="music">Music Production</TabsTrigger>
                    <TabsTrigger value="web">Web Development</TabsTrigger>
                    <TabsTrigger value="educ">Educating</TabsTrigger>
                </TabsList>
                <TabsContent value="music">
                    Make changes to your account here.
                </TabsContent>
                <TabsContent value="web">
                    Change your password here.
                </TabsContent>
                <TabsContent value="educ">Change your folan.</TabsContent>
            </Tabs>
        </MainLayout>
    )
}
export default Portfolio
