import React, { useState, useEffect } from 'react';
import { Dialog, DialogTitle, DialogContent, DialogActions, Button } from '@mui/material';
import UserProfileContent from './UserProfileContent';
import axios from 'axios';

const ProfileDialog = () => {
    const [open, setOpen] = useState(false);
    const [loading, setLoading] = useState(true);
    const [formData, setFormData] = useState({
        fullName: '',
        gender: '',
        country: '',
        language: '',
        emailAddresses: '',
        phoneNumber: '',
        interests: [],
        address: {
            street: '',
            city: '',
            state: '',
            postalCode: '',
            country: '',
        },
    });

    useEffect(() => {
        const fetchProfileData = async () => {
            try {
                const response = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/api/profile`);
                const profileData = response.data;

                const isProfileComplete = profileData && profileData.address && profileData.interests && profileData.interests.length > 0;
                if (!isProfileComplete) {
                    setOpen(true);
                } else {
                    setFormData(profileData);
                }
            } catch (error) {
                console.error('Error fetching profile data:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchProfileData();
    }, []);
    // useEffect(() => {
    //     const fetchProfileData = async () => {
    //         try {
                
    //             if (!false) {
    //                 setOpen(true);
    //             } else {
    //                 setFormData(null);
    //             }
    //         } catch (error) {
    //             console.error('Error fetching profile data:', error);
    //         } finally {
    //             setLoading(false);
    //         }
    //     };

    //     fetchProfileData();
    // }, []);


    const handleClose = () => {
        setOpen(false);
    };

    if (loading) {
        return null;
    }

    return (
        <Dialog open={open} onClose={handleClose} fullWidth maxWidth="sm">
            <DialogTitle>Please update your Profile</DialogTitle>
            <DialogContent>
                {/* Pass handleClose as onSave to UserProfileContent */}
                <UserProfileContent formData={formData} setFormData={setFormData} onSave={handleClose} />
            </DialogContent>
        </Dialog>
    );
};

export default ProfileDialog;