export interface VerificationComponentProps {
    onVerificationCompleted: (verificationReference: string) => void;
    onVerificationFailed: (error: string) => void;
    onVerificationSubmitted: (verificationReference: string) => void;
    onVerificationCanceled: () => void; //exited
    verificationType: VerificationTypes["image"] | VerificationTypes["video"];
}

export interface VerificationTypes {
    image: string;
    video: string;
}