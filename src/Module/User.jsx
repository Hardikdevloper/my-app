import React, { useEffect, useState, useRef } from 'react';
import { useGetUserDetailQuery } from '../store/api/userDetail';
import DeatilCard from '../../src/Component/detailCard';

/*******************   
  @purpose : Used For display author card
  @Author : hardik
*******************/
const User = () => {
  const [page, setPage] = useState(0); // Current page number
  const [data, setData] = useState([]); // Array to store fetched data

  const observerTargetRef = useRef(null); // Reference to the target element for intersection observer

  const { data: userData, isLoading } = useGetUserDetailQuery(page, {
    skip: page === null,
    refetchOnMountOrArgChange: true,
  });

  useEffect(() => {
    // Set a timer to increment the page number every 10 seconds
    const timer = setInterval(() => {
      setPage((prevPage) => prevPage + 1);
    }, 10000);

    return () => {
      // Clean up the timer when the component unmounts
      clearInterval(timer);
    };
  }, []);

  useEffect(() => {
    // Append new data to the existing data array when userData changes
    if (userData) {
      setData((prevData) => [...prevData, ...userData.hits]);
    }
  }, [userData]);

  useEffect(() => {
    // Create an intersection observer
    const observer = new IntersectionObserver((entries) => {
      const target = entries[0];
      if (target.isIntersecting && !isLoading) {
        // If the target is intersecting and not loading, increment the page number
        setPage((prevPage) => prevPage + 1);
      }
    });

    // Observe the target element
    if (observerTargetRef.current) {
      observer.observe(observerTargetRef.current);
    }

    // Clean up the observer when the component unmounts
    return () => {
      if (observerTargetRef.current) {
        observer.unobserve(observerTargetRef.current);
      }
    };
  }, [observerTargetRef.current]);

  return (
    <>
      {isLoading && <h2>Loading...</h2>}
      {data.length > 0 && (
        <>
          {/* Render the detail cards for each data item */}
          {data.map((data, index) => (
            <DeatilCard key={index} author={data?.author} date={data?.created_at} title={data?.title} />
          ))}
          {/* Target element for intersection observer */}
          <div ref={observerTargetRef}></div>
        </>
      )}
    </>
  );
};

export default User;
