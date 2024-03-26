import "../globals.css";
import SideBarComponent from "@/components/sidebar/SideBarComponent";

export default function AdminLayout(
    {
        children,
    }: Readonly<{
        children: React.ReactNode;
    }>
) {
    return (
        <html lang="en">
            <body>
                <aside className="fixed h-screen">
                    <SideBarComponent/>
                </aside>
                <main>
                    {children}
                </main>
            </body>
        </html>
    )
}