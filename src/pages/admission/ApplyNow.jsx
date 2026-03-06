import { useEffect } from 'react';

const ApplyNow = () => {
  useEffect(() => {
    window.location.href = "https://crm.pcte.edu.in/form/C1776F3B-F400-4F6B-9D84-D2FB4D9A3BC8";
  }, []);

  return null; // Or a loading spinner/message while redirecting
};

export default ApplyNow;
