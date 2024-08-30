import React, { useEffect, useState } from "react";
import GitHubCalendar from "react-github-calendar";
import axios from "axios";
import { Progress } from 'react-daisyui';

function Github() {
  const [userData, setUserData] = useState(null);
  const [repoData, setRepoData] = useState([]);
  const [languagesData, setLanguagesData] = useState([]);

  useEffect(() => {
    // Fetch GitHub user data
    const fetchUserData = async () => {
      try {
        const response = await axios.get("https://api.github.com/users/suraj0119");
        setUserData(response.data);
      } catch (error) {
        console.error("Error fetching user data", error);
      }
    };

    // Fetch GitHub repository data
    const fetchRepoData = async () => {
      try {
        const response = await axios.get("https://api.github.com/users/suraj0119/repos");
        setRepoData(response.data);
      } catch (error) {
        console.error("Error fetching repository data", error);
      }
    };

    // Fetch repository languages data
    const fetchLanguagesData = async () => {
      try {
        const repoLanguagesPromises = repoData.map(repo => 
          axios.get(repo.languages_url).then(response => ({
            name: repo.name,
            languages: response.data
          }))
        );

        const repoLanguages = await Promise.all(repoLanguagesPromises);
        const languageUsage = repoLanguages.reduce((acc, { languages }) => {
          for (const [language, bytes] of Object.entries(languages)) {
            acc[language] = (acc[language] || 0) + bytes;
          }
          return acc;
        }, {});

        const sortedLanguages = Object.entries(languageUsage).sort((a, b) => b[1] - a[1]);
        setLanguagesData(sortedLanguages);
      } catch (error) {
        console.error("Error fetching languages data", error);
      }
    };

    fetchUserData();
    fetchRepoData();
    fetchLanguagesData();
  }, [repoData]);

  return (
    <div className="flex flex-col items-center py-10 px-4 bg-gray-900">
      <h1 className="text-3xl sm:text-4xl font-bold pb-6 text-white text-center">
        Days I <strong className="text-purple-500">Code</strong>
      </h1>
      <div className="w-full max-w-5xl flex flex-col md:flex-row gap-8">
        {/* Calendar and languages progress bars */}
        <div className="flex-1 flex flex-col md:flex-row gap-8">
          <div className="flex-1">
            <GitHubCalendar
              username="suraj0119"
              blockSize={15}
              blockMargin={5}
              color="#c084f5"
              fontSize={16}
            />
          </div>
          {/* <div className="flex-1">
            <h2 className="text-xl sm:text-2xl font-semibold mb-4 text-white">Most Used Languages</h2>
            <div className="relative w-full overflow-x-auto">
              {languagesData.map(([language, bytes]) => {
                const percentage = (bytes / 10000) * 100; // Adjust the denominator to scale the progress bar
                return (
                  <div key={language} className="mb-4">
                    <div className="flex items-center justify-between text-white mb-1">
                      <span className="block font-medium">{language}</span>
                      <span className="text-sm">{Math.round(percentage)}%</span>
                    </div>
                    <Progress
                      value={percentage}
                      color="white"
                      size="lg"
                      className="w-full"
                    />
                  </div>
                );
              })}
            </div>
          </div> */}
        </div>
      </div>

      <div className="w-full max-w-6xl mt-10 px-4 text-center md:text-left">
        {userData && (
          <div className="text-white">
            <h2 className="text-xl sm:text-2xl font-semibold mb-4">GitHub Stats</h2>
            <p className="text-base sm:text-lg mb-2">Public Repositories: {userData.public_repos}</p>
            <p className="text-base sm:text-lg mb-2">Followers: {userData.followers}</p>
            <p className="text-base sm:text-lg">Following: {userData.following}</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default Github;
