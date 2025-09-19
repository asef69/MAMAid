import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { register } from "@/services/registerService"
import { signin } from "@/services/signinServer"
import userStore from "@/state/userState"
import { useMutation } from "@tanstack/react-query"
import { useState } from "react"
import { setAuthToken } from "@/helpers/axiosInstance";

function LoginOrSignup(){
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPasswrod] = useState("");
    const [confirm_password, setConfirmPassword] = useState("");
    const [phone_number, setPhoneNumber] = useState("");
    const [address, setAddress] = useState("");


    const {setUser} = userStore();

    const registerMutation = useMutation({
        mutationFn: (data) => register(data),
        onSuccess: (data) => {
            console.log("Registration successful: ", data)
        },
        onError: (error) => {
            console.log("Registration error: ", error)
        }
    })

    const signinMutation = useMutation({
        mutationFn: (data) => signin(data),
        onSuccess: (data) => {
            console.log("Signin successful: ", data)
            setUser(data);
            const user = userStore.getState().user;
            console.log("User token:", user.access); // Add this line
            if (user && user.access) {
                setAuthToken(user.access);
            }
        },
        onError: (error) => {
            console.log("Signin error: ", error)
        }
    })
    

    const handleRegister = () => {
        const dataObject = {
            username,
            email,
            password,
            confirm_password,
            phone_number,
            address
        }

        registerMutation.mutate(dataObject);
    }

    const handleSignIn = () => {
        const dataObject = {
            username,
            password
        }

        console.log("Data Object: ", dataObject);

        signinMutation.mutate(dataObject);
    }

    return(
        <div className="flex w-full max-w-sm flex-col gap-6">
            <Tabs defaultValue="signin">
                <TabsList>
                    <TabsTrigger value="signin">Sign In</TabsTrigger>
                    <TabsTrigger value="register">Register</TabsTrigger>
                </TabsList>
                <TabsContent value="signin">
                    <Card>
                        <CardHeader>
                            <CardTitle>Sign In</CardTitle>
                            <CardDescription>
                                Signin to your account
                            </CardDescription>
                        </CardHeader>
                        <CardContent className="grid gap-6">
                            <div className="grid gap-3">
                                <Label htmlFor="tabs-demo-name">Username</Label>
                                <Input id="tabs-demo-name" placeholder="Enter your name..." value={username} onChange={(e) => setUsername(e.target.value)} />
                            </div>
                            <div className="grid gap-3">
                                <Label htmlFor="tabs-demo-username">Password</Label>
                                <Input id="tabs-demo-username" placeholder="Enter your password..." value={password} onChange={(e) => setPasswrod(e.target.value)} />
                            </div>
                        </CardContent>
                        <CardFooter>
                            <Button onClick={handleSignIn}>Sign in</Button>
                        </CardFooter>
                    </Card>
                </TabsContent>
                <TabsContent value="register">
                    <Card>
                        <CardHeader>
                            <CardTitle>Register</CardTitle>
                            <CardDescription>
                                Create a new account
                            </CardDescription>
                        </CardHeader>
                        <CardContent className="grid gap-6">
                            <div className="grid gap-3">
                                <Label htmlFor="tabs-demo-current">User Name</Label>
                                <Input id="tabs-demo-current" placeholder="Username..." value={username} onChange={(e) => setUsername(e.target.value)} />
                            </div>
                            <div className="grid gap-3">
                                <Label htmlFor="tabs-demo-new">Email</Label>
                                <Input id="tabs-demo-new" placeholder="Email..." value={email} onChange={(e) => setEmail(e.target.value)} />
                            </div>
                            <div className="grid gap-3">
                                <Label htmlFor="tabs-demo-new">Password</Label>
                                <Input id="tabs-demo-new" placeholder="Password..." value={password} onChange={(e) => setPasswrod(e.target.value)} />
                            </div>
                            <div className="grid gap-3">
                                <Label htmlFor="tabs-demo-new">Confirm Password</Label>
                                <Input id="tabs-demo-new" placeholder="Confirm password..." value={confirm_password} onChange={(e) => setConfirmPassword(e.target.value)} />
                            </div>
                            <div className="grid gap-3">
                                <Label htmlFor="tabs-demo-new">Phone</Label>
                                <Input id="tabs-demo-new" placeholder="Phone..." value={phone_number} onChange={(e) => setPhoneNumber(e.target.value)} />
                            </div>
                            <div className="grid gap-3">
                                <Label htmlFor="tabs-demo-new">Address</Label>
                                <Input id="tabs-demo-new" placeholder="Address..." value={address} onChange={(e) => setAddress(e.target.value)} />
                            </div>
                        </CardContent>
                        <CardFooter>
                            <Button onClick={handleRegister}>Register</Button>
                        </CardFooter>
                    </Card>
                </TabsContent>
            </Tabs>
        </div>
    )
}

export default LoginOrSignup;