import discord
from discord.ext import commands

client = commands.Bot(command_prefix='!')

@client.event
async def on_ready():
    print("Ready Set GO!")
    print("---------------------------------------")

@client.command()
async def hello(ctx):
    await ctx.send("Ready to Get to Action")
    
client.run('MTEyOTE5MjAyOTU4MzMxMDg3OA.G7mNDJ.4dd3oZNHkJa4ixJbsWiDoAiYcibJZJYgEcvSd8')
